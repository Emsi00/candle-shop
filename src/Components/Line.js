import "bootstrap/dist/css/bootstrap.min.css";

const Line = (props) => {
  return <div className={props.orientation ? "vr" : "hr"}></div>;
};

export default Line;
