import React from "react";
import usePosition from "./usePosition";
import { PropTypes } from "prop-types";

const GetCoordinates = () => {
    const {latitude, longitude, error} = usePosition();
    return (
      <code>
        latitude: {latitude}<br/>
        longitude: {longitude}<br/>
        error: {error}
      </code>
    );
  };

GetCoordinates.propTypes = {
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
};
export default GetCoordinates;