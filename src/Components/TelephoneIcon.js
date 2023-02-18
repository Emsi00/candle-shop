/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Telephone } from "react-bootstrap-icons";
import { useState } from "react";
const TelephoneIcon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showTelephone = () => {
    setIsVisible(true);
  };
  const delayedHideTelephone = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  };
  return (
    <a
      type="button"
      onMouseEnter={showTelephone}
      onMouseLeave={delayedHideTelephone}
    >
      <Telephone
        width="34px"
        height="34px"
        type="button"
        className="position-fixed"
        color="rgb(37, 211, 102)"
        style={{
          bottom: "0",
          right: "0",
          marginBottom: "130px",
          marginRight: !isVisible ? "10px" : "100px",
        }}
      />
      {isVisible && (
        <span
          width="34px"
          height="34px"
          className="position-fixed"
          color="rgb(37, 211, 102)"
          style={{
            bottom: "0",
            right: "0",
            marginBottom: "140px",
            marginRight: "10px",
            fontWeight: "600",
          }}
        >
          123 456 789
        </span>
      )}
    </a>
  );
};

export default TelephoneIcon;
