import classes from "./KakaoSelection.module.css";
import { useState } from "react";
import KakaoSelectionItem from "./KakaoSelectionItem";

const cityList = [
  { name: "동작구", englishName: "DONGJAK", number: "1" },
  { name: "종로구", englishName: "JONGNO", number: "2" },
  { name: "중구", englishName: "JUNG", number: "3" },
  { name: "용산구", englishName: "YONGSAN", number: "4" },
  { name: "성동구", englishName: "SEONGDONG", number: "5" },
  { name: "광진구", englishName: "GWANGJIN", number: "6" },
  { name: "동대문구", englishName: "DONGDAEMUN", number: "7" },
  { name: "중랑구", englishName: "JUNGNANG", number: "8" },
  { name: "성북구", englishName: "SEONGBUK", number: "9" },
  { name: "강북구", englishName: "GANGBUK", number: "10" },
  { name: "도봉구", englishName: "DOBONG", number: "11" },
  { name: "노원구", englishName: "NOWON", number: "12" },
  { name: "은평구", englishName: "EUNPYEONG", number: "13" },
  { name: "서대문구", englishName: "SEODAEMUN", number: "14" },
  { name: "마포구", englishName: "MAPO", number: "15" },
  { name: "양천구", englishName: "YANGCHEON", number: "16" },
  { name: "강서구", englishName: "GANGSEO", number: "17" },
  { name: "구로구", englishName: "GURO", number: "18" },
  { name: "금천구", englishName: "GEUMCHEON", number: "19" },
  { name: "영등포구", englishName: "YEONGDEUNGPO", number: "20" },
  { name: "관악구", englishName: "GWANAK", number: "21" },
  { name: "서초구", englishName: "SEOCHO", number: "22" },
  { name: "강남구", englishName: "GANGNAM", number: "23" },
  { name: "송파구", englishName: "SONGPA", number: "24" },
  { name: "강동구", englishName: "GANGDONG", number: "25" },
];

const KakaoSelection = () => {
  return (
    <ul className={classes.city_container}>
      {cityList.length === 0 ? (
        <div>Sorry. Not Found</div>
      ) : (
        cityList.map((city) => (
          <KakaoSelectionItem city={city}>
            {city.englishName.split("-")[0]}
          </KakaoSelectionItem>
        ))
      )}
    </ul>
  );
};

export default KakaoSelection;
