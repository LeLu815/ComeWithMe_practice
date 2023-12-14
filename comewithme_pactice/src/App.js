import classes from "./App.module.css";
import GoogleWrapper from "./components/GoogleWrapper";

function App() {
  return (
    <div className={classes["background"]}>
      <GoogleWrapper />
    </div>
  );
}

export default App;
