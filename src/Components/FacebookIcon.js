import { Facebook } from "react-bootstrap-icons";

const FacebookIcon = () => {
  return (
    <a href="https:/www.facebook.com" target="_blank">
      <Facebook
        width="34px"
        height="34px"
        type="button"
        className="position-fixed"
        color="rgb(6,112,232)"
        style={{
          bottom: "0",
          right: "0",
          marginBottom: "50px",
          marginRight: "10px",
        }}
      />
    </a>
  );
};

export default FacebookIcon;
