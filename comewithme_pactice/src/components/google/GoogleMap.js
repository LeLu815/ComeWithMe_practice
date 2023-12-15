import React, { useState, useEffect, useRef } from "react";
import {
  lookupRegion,
  LookupRegionRequestData,
  LookupRegionResponseData,
  LookupRegionResponse,
  RegionIdentifier,
} from "@googlemaps/region-lookup";
import classes from "./GoogleMap.module.css";

function GoogleMap() {
  const ref = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (ref.current && !map) {
      const myMap = new window.google.maps.Map(ref.current, {
        center: { lat: 37.569227, lng: 126.9777256 },
        zoom: 11,
        mapId: process.env.REACT_APP_GOOGLE_MAP_ID,
      });
      const featureStyleOptions = {
        strokeColor: "#810FCB",
        strokeOpacity: 1.0,
        strokeWeight: 3.0,
        fillColor: "#810FCB",
        fillOpacity: 0.5,
      };
      myMap.getFeatureLayer("LOCALITY").style = (options) => {
        console.log(options);
        if (options.feature.placeId === "ChIJgYYqF3iffDURmGQzSoStNBU") {
          return featureStyleOptions;
        }
      };
      setMap(myMap);
    }
  }, [ref, map]);

  return <div ref={ref} style={{ width: "600px", height: "400px" }}></div>;
}

export default GoogleMap;

// const GoogleMap = () => {
//   return (
//     <div>
//       <iframe
//         width="600px"
//         height="400px"
//         src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&q=서울시&zoom=12`}
//       />
//     </div>
//   );
// };
