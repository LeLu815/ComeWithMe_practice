import { useState } from "react";
import KakaoMap from "./kakao/KakaoMap";
import KakaoSelection from "./kakao/KakaoSelection";
import CardLarge from "./UI/CardLarge";

import classes from "./MapContainer.module.css";

const MapContainer = () => {
  const [cityName, setCityName] = useState(null);
  const [HoverCity, setHoverCity] = useState(null);
  const [cityList, setCityList] = useState([]);

  const setCityListFunc = (list) => {
    setCityList(list);
  };
  const onHoverCityMap = (hover) => {
    setHoverCity(hover);
  };
  const onClickCityMap = (cityName) => {
    setCityName(cityName);
  };

  return (
    <CardLarge>
      <div className={classes.text_div}>
        WHERE DO YOU WANT
        <br />
        TO EXPLOERE IN SEOUL
      </div>
      <KakaoMap setMap={setCityListFunc} onHover={onHoverCityMap} />
      <KakaoSelection />
    </CardLarge>
  );
};

export default MapContainer;
