import classes from "./KakaoSelectionItem.module.css";
import { useState } from "react";

const KakaoSelectionItem = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <span
      key={props.city.name}
      className={
        isHovering
          ? `${classes.city_name} ${classes.glow_color}`
          : `${classes.city_name} ${classes.nomal_color}`
      }
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {props.city.englishName.split("-")[0]}
    </span>
  );
};

export default KakaoSelectionItem;
