import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export const SearchBox = (props) => {
  // static propTypes = {
  //   placeholder: React.PropTypes.string,
  //   onPlacesChanged: React.PropTypes.func,
  // };

  const onPlacesChanged = () => {
    // if (props.onPlacesChanged) {
    //   props.onPlacesChanged(searchBox.getPlaces());
    // }
  };
  useEffect(() => {
    var input = ReactDOM.findDOMNode(refs.input);
    searchBox = new google.maps.places.SearchBox(input);
    searchBox.addListener("places_changed", onPlacesChanged);
    return () => {
      google.maps.event.clearInstanceListeners(searchBox);
    };
  }, []);

  return <input ref="input" {...props} type="text" />;
};
