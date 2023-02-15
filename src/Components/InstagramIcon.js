import { Instagram } from "react-bootstrap-icons";

const InstagramIcon = () => {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href="https:/www.instagram.com" target="_blank">
      <Instagram
        width="34px"
        height="34px"
        type="button"
        className="position-fixed"
        color="rgb(251, 57, 88)"
        style={{
          bottom: "0",
          right: "0",
          marginBottom: "90px",
          marginRight: "10px",
        }}
      />
    </a>
  );
};

export default InstagramIcon;
