import { Wrapper } from "@googlemaps/react-wrapper";
import GoogleMap from "./GoogleMap";

const GoogleWrapper = () => {
  return (
    <Wrapper
      apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
      libraries={"places"}
    >
      <GoogleMap />
    </Wrapper>
  );
};

export default GoogleWrapper;
