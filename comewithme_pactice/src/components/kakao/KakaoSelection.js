import classes from "./KakaoSelection.module.css";
import { useState, useReducer } from "react";
import KakaoSelectionItem from "./KakaoSelectionItem";

// const cityList = [
//   { name: "동작구", englishName: "DONGJAK", number: "1", checked: false },
//   { name: "종로구", englishName: "JONGNO", number: "2", checked: false },
//   { name: "중구", englishName: "JUNG", number: "3", checked: false },
//   { name: "용산구", englishName: "YONGSAN", number: "4", checked: false },
//   { name: "성동구", englishName: "SEONGDONG", number: "5", checked: false },
//   { name: "광진구", englishName: "GWANGJIN", number: "6", checked: false },
//   { name: "동대문구", englishName: "DONGDAEMUN", number: "7", checked: false },
//   { name: "중랑구", englishName: "JUNGNANG", number: "8", checked: false },
//   { name: "성북구", englishName: "SEONGBUK", number: "9", checked: false },
//   { name: "강북구", englishName: "GANGBUK", number: "10", checked: false },
//   { name: "도봉구", englishName: "DOBONG", number: "11", checked: false },
//   { name: "노원구", englishName: "NOWON", number: "12", checked: false },
//   { name: "은평구", englishName: "EUNPYEONG", number: "13", checked: false },
//   { name: "서대문구", englishName: "SEODAEMUN", number: "14", checked: false },
//   { name: "마포구", englishName: "MAPO", number: "15", checked: false },
//   { name: "양천구", englishName: "YANGCHEON", number: "16", checked: false },
//   { name: "강서구", englishName: "GANGSEO", number: "17", checked: false },
//   { name: "구로구", englishName: "GURO", number: "18", checked: false },
//   { name: "금천구", englishName: "GEUMCHEON", number: "19", checked: false },
//   {
//     name: "영등포구",
//     englishName: "YEONGDEUNGPO",
//     number: "20",
//     checked: false,
//   },
//   { name: "관악구", englishName: "GWANAK", number: "21", checked: false },
//   { name: "서초구", englishName: "SEOCHO", number: "22", checked: false },
//   { name: "강남구", englishName: "GANGNAM", number: "23", checked: false },
//   { name: "송파구", englishName: "SONGPA", number: "24", checked: false },
//   { name: "강동구", englishName: "GANGDONG", number: "25", checked: false },
// ];

const KakaoSelection = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [cityList, setCityList] = useState([
    { name: "동작구", englishName: "DONGJAK", number: "1", checked: false },
    { name: "종로구", englishName: "JONGNO", number: "2", checked: false },
    { name: "중구", englishName: "JUNG", number: "3", checked: false },
    { name: "용산구", englishName: "YONGSAN", number: "4", checked: false },
    { name: "성동구", englishName: "SEONGDONG", number: "5", checked: false },
    { name: "광진구", englishName: "GWANGJIN", number: "6", checked: false },
    {
      name: "동대문구",
      englishName: "DONGDAEMUN",
      number: "7",
      checked: false,
    },
    { name: "중랑구", englishName: "JUNGNANG", number: "8", checked: false },
    { name: "성북구", englishName: "SEONGBUK", number: "9", checked: false },
    { name: "강북구", englishName: "GANGBUK", number: "10", checked: false },
    { name: "도봉구", englishName: "DOBONG", number: "11", checked: false },
    { name: "노원구", englishName: "NOWON", number: "12", checked: false },
    { name: "은평구", englishName: "EUNPYEONG", number: "13", checked: false },
    {
      name: "서대문구",
      englishName: "SEODAEMUN",
      number: "14",
      checked: false,
    },
    { name: "마포구", englishName: "MAPO", number: "15", checked: false },
    { name: "양천구", englishName: "YANGCHEON", number: "16", checked: false },
    { name: "강서구", englishName: "GANGSEO", number: "17", checked: false },
    { name: "구로구", englishName: "GURO", number: "18", checked: false },
    { name: "금천구", englishName: "GEUMCHEON", number: "19", checked: false },
    {
      name: "영등포구",
      englishName: "YEONGDEUNGPO",
      number: "20",
      checked: false,
    },
    { name: "관악구", englishName: "GWANAK", number: "21", checked: false },
    { name: "서초구", englishName: "SEOCHO", number: "22", checked: false },
    { name: "강남구", englishName: "GANGNAM", number: "23", checked: false },
    { name: "송파구", englishName: "SONGPA", number: "24", checked: false },
    { name: "강동구", englishName: "GANGDONG", number: "25", checked: false },
  ]);

  const handleCityCheck = (cityName) => {
    setCityList((list) => {
      return list.map((cityinfo) => {
        if (cityinfo.name === cityName) {
          return { ...cityinfo, checked: !cityinfo.checked };
        }
        return cityinfo;
      });
    });
  };
  const handleAllCityCheck = () => {
    console.log(isClicked);
    setCityList((list) => {
      return list.map((cityinfo) => {
        return { ...cityinfo, checked: isClicked ? false : true };
      });
    });
    setIsClicked((isClicked) => !isClicked);
  };

  return (
    <fieldset className={classes.city_container}>
      <input type="checkbox" onClick={handleAllCityCheck} />
      {cityList.length === 0 ? (
        <div>Sorry. Not Found</div>
      ) : (
        cityList.map((city) => (
          <KakaoSelectionItem
            city={city}
            key={city.name}
            checked={city.checked}
            onCityChange={handleCityCheck}
          >
            {city.englishName}
          </KakaoSelectionItem>
        ))
      )}
    </fieldset>
  );
};

export default KakaoSelection;
