import classes from "./CardLarge.module.css";

const CardLarge = (props) => {
  return <div className={classes.card_large}>{props.children}</div>;
};

export default CardLarge;
