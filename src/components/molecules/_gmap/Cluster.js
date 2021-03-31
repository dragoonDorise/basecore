export const Cluster = ({
  pointCount,
  supercluster,
  mapRef,
  latitude,
  longitude,
  clusterId,
}) => {
  return (
    <button
      type="button"
      className="gmap__cluster"
      onClick={() => {
        const expansionZoom = Math.min(
          supercluster.getClusterExpansionZoom(clusterId),
          20
        );
        mapRef.current.setZoom(expansionZoom);
        mapRef.current.panTo({ lat: latitude, lng: longitude });
      }}
    >
      {pointCount}
    </button>
  );
};
