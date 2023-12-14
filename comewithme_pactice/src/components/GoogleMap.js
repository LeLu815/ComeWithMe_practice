import React, { useState, useEffect, useRef } from "react";
import classes from "./GoogleMap.module.css";

function GoogleMap() {
  const ref = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: { lat: 37.569227, lng: 126.9777256 },
          zoom: 11,
        })
      );
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
