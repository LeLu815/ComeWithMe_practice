import React, { useEffect } from "react";
import geoJson from "../../data/sig.json";

const { kakao } = window;

const KakaoMap = () => {
  const data = geoJson.features;
  console.log(data);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5642135, 127.0016985), // 이미지 지도의 중심좌표
      level: 9,
    };
    const map = new kakao.maps.StaticMap(container, options);
  }, []);
  return <div id="map" style={{ width: "700px", height: "500px" }}></div>;
};

export default KakaoMap;
