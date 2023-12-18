import classes from "./App.module.css";
import GoogleWrapper from "./components/google/GoogleWrapper";
import KakaoMap from "./components/kakao/KakaoMap";
import MapContainer from "./components/MapContainer";

function App() {
  return (
    <div className={classes["background"]}>
      <MapContainer />
    </div>
  );
}

export default App;
