import React, { useState, useRef, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import Autocomplete from "react-google-autocomplete";

import { Cluster } from "./Cluster";
import { Marker } from "./Marker";
//import { SearchBox } from "./SearchBox";

import "./_gmap.scss";

export const GMap = ({
  pointsData,
  defaultLat,
  defaultLong,
  onClick,
  closeClick,
}) => {
  pointsData = Object.values(pointsData);

  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);

  const [centerState, setCenterState] = useState({
    lat: defaultLat,
    long: defaultLong,
  });

  const { lat, long } = centerState;

  //We update the state if the props change
  useEffect(() => {
    setCenterState({ ...centerState, lat: defaultLat, long: defaultLong });
  }, [defaultLat]);

  const points = pointsData.map((item) => {
    return {
      properties: {
        name: item.nombre,
        address: item.direccion,
        state: item.nombre_provincia,
        id: item.id_outlet,
      },
      geometry: { type: "Point", coordinates: [item.longitud, item.latitud] },
    };
  });

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  const createMapOptions = function (maps) {
    return {
      fullscreenControl: false,
      mapTypeControl: true,
      streetViewControl: true,
    };
  };

  return (
    <div className="gmap">
      <div className="gmap__list">
        <span className="h4">Busca un taller</span>
        <ul>
          {clusters.map((cluster) => {
            const { name, address, state } = cluster.properties;
            const [longitude, latitude] = cluster.geometry.coordinates;
            const {
              cluster: isCluster,
              point_count: pointCount,
            } = cluster.properties;

            if (!isCluster) {
              return (
                <li key={`${latitude}${longitude}`}>
                  <button
                    type="button"
                    className="gmap__list-btn"
                    onClick={() => {
                      mapRef.current.setZoom(12);
                      const latitudeNum = parseFloat(latitude);
                      const longitudeNum = parseFloat(longitude);
                      mapRef.current.panTo({
                        lat: latitudeNum,
                        lng: longitudeNum,
                      });
                    }}
                  >
                    <strong className="gmap__list-name">{name}</strong>
                    <span className="gmap__list-address">
                      {address}, {state}
                    </span>
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="gmap__map">
        <button className="gmap__close" type="button" onClick={closeClick}>
          &times;
        </button>

        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAV14gCjjR2zUk_WR5_1HpTRjPq5nwrBjY",
            libraries: "places",
          }}
          defaultCenter={{ lat: defaultLat, lng: defaultLong }}
          center={{ lat: lat, lng: long }}
          defaultZoom={10}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map }) => {
            mapRef.current = map;
          }}
          options={createMapOptions}
          onChange={({ zoom, bounds }) => {
            setZoom(zoom);
            setBounds([
              bounds.nw.lng,
              bounds.se.lat,
              bounds.se.lng,
              bounds.nw.lat,
            ]);
          }}
        >
          {clusters.map((cluster) => {
            const { name, address, state, id } = cluster.properties;
            const [longitude, latitude] = cluster.geometry.coordinates;
            const {
              cluster: isCluster,
              point_count: pointCount,
            } = cluster.properties;
            if (isCluster) {
              return (
                <Cluster
                  key={`cluster-${cluster.id}`}
                  lat={latitude}
                  lng={longitude}
                  supercluster={supercluster}
                  mapRef={mapRef}
                  latitude={latitude}
                  longitude={longitude}
                  pointCount={pointCount}
                  clusterId={cluster.id}
                ></Cluster>
              );
            }

            return (
              <Marker
                key={`${latitude}${longitude}`}
                lat={latitude}
                lng={longitude}
                name={name}
                id={id}
                address={`${address}, ${state}`}
                onClick={onClick}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    </div>
  );
};
