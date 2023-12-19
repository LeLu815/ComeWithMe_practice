import React, { useEffect, useState } from "react";
import geoJson from "../../data/TL_SCCO_CTPRVN.json";
import outerGeoJson from "../../data/OUTER.json";
const { kakao } = window;

const KakaoMap = (props) => {
  const [clickkData, setClickData] = useState(null);

  const areas = [];
  const features = geoJson.features;
  for (let i = 0; i < features.length; i++) {
    const name = features[i].properties.SIG_KOR_NM;
    const englishName = features[i].properties.SIG_ENG_NM;
    const path = features[i].geometry.coordinates[0].map(
      (numList) => new kakao.maps.LatLng(Number(numList[1]), Number(numList[0]))
    );
    areas.push({
      name: name,
      englishName: englishName,
      path: path,
    });
  }

  const outerAreas = [];
  const outerFeatures = outerGeoJson.features;
  for (let i = 0; i < outerFeatures.length; i++) {
    const name = outerFeatures[i].properties.SIG_KOR_NM;
    const englishName = outerFeatures[i].properties.SIG_ENG_NM;
    const path = outerFeatures[i].geometry.coordinates[0].map(
      (numList) => new kakao.maps.LatLng(Number(numList[1]), Number(numList[0]))
    );
    outerAreas.push({
      name: name,
      englishName: englishName,
      path: path,
    });
  }

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5642135, 127.0016985), // 이미지 지도의 중심좌표
      level: 10,
    };
    const map = new kakao.maps.Map(container, options);

    const customOverlay = new kakao.maps.CustomOverlay({});
    const infowindow = new kakao.maps.InfoWindow({ removable: true });

    function displayArea(area) {
      // 다각형을 생성합니다
      const polygon = new kakao.maps.Polygon({
        map: map, // 다각형을 표시할 지도 객체
        path: area.path,
        strokeWeight: 1,
        strokeColor: "#646464",
        strokeOpacity: 1,
        fillColor: "#1a1a1a",
        fillOpacity: 1,
      });

      // 다각형에 mouseover 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 변경합니다
      // 지역명을 표시하는 커스텀오버레이를 지도위에 표시합니다
      kakao.maps.event.addListener(polygon, "mouseover", function (mouseEvent) {
        polygon.setOptions({ fillColor: "#D1FF00" });
        // console.log(area.name);
        setClickData(area.name);

        // customOverlay.setContent('<div class="area">' + area.name + "</div>");

        // customOverlay.setPosition(mouseEvent.latLng);
        // customOverlay.setMap(map);
      });

      // // 다각형에 mousemove 이벤트를 등록하고 이벤트가 발생하면 커스텀 오버레이의 위치를 변경합니다
      // kakao.maps.event.addListener(polygon, "mousemove", function (mouseEvent) {
      //   customOverlay.setPosition(mouseEvent.latLng);
      // });

      // 다각형에 mouseout 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 원래색으로 변경합니다
      // 커스텀 오버레이를 지도에서 제거합니다
      kakao.maps.event.addListener(polygon, "mouseout", function () {
        polygon.setOptions({ fillColor: "#1a1a1a" });
        customOverlay.setMap(null);
        setClickData(null);
      });

      // // 다각형에 click 이벤트를 등록하고 이벤트가 발생하면 다각형의 이름과 면적을 인포윈도우에 표시합니다
      // kakao.maps.event.addListener(polygon, "click", function (mouseEvent) {
      //   var content =
      //     '<div class="info">' +
      //     '   <div class="title">' +
      //     area.name +
      //     "</div>" +
      //     '   <div class="size">총 면적 : 약 ' +
      //     Math.floor(polygon.getArea()) +
      //     " m<sup>2</sup></div>" +
      //     "</div>";

      //   infowindow.setContent(content);
      //   infowindow.setPosition(mouseEvent.latLng);
      //   infowindow.setMap(map);
      // });
    }
    function outerDisplayArea(area) {
      new kakao.maps.Polygon({
        map: map, // 다각형을 표시할 지도 객체
        path: area.path,
        strokeColor: "#000000",
        strokeOpacity: 1,
        fillColor: "#000000",
        fillOpacity: 1,
      });
    }

    for (let i = 0; i < areas.length; i++) {
      displayArea(areas[i]);
    }
    for (let i = 0; i < outerAreas.length; i++) {
      outerDisplayArea(outerAreas[i]);
    }
  }, [clickkData, areas, outerAreas]);
  return (
    <>
      <div id="map" style={{ width: "380px", height: "310px" }}></div>
    </>
  );
};

export default KakaoMap;
