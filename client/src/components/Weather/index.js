import React, { Component } from "React";
import usePosition from "./usePosition";


export const GetCoordinates = () => {
    const {latitude, longitude, error} = usePosition();
    return (
      <code>
        latitude: {latitude}<br/>
        longitude: {longitude}<br/>
        error: {error}
      </code>
    );
  };

class Weather extends Component {
    
}