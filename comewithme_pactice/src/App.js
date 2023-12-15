import classes from "./App.module.css";
import GoogleWrapper from "./components/google/GoogleWrapper";
import KakaoMap from "./components/kakao/KakaoMap";

function App() {
  return (
    <div className={classes["background"]}>
      {/* <GoogleWrapper /> */}
      <KakaoMap />
    </div>
  );
}

export default App;
