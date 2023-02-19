import "bootstrap/dist/css/bootstrap.min.css";
import { useMediaQuery } from "@mui/material";
import styled from "styled-components";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { Search, Cash, TelephoneFill } from "react-bootstrap-icons";
const FeatureDiv = styled.div`
  width: 200px;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const FeatureUpperDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 10%;
`;
const FeatureLowerDiv = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
`;
const AboutUs = () => {
  const matches = useMediaQuery("(min-width:1000px)");
  return (
    <>
      <div className="d-flex align-items-center flex-column">
        <div className="d-flex text-center" style={{ width: "60%" }}>
          Jesteśmy młodą firmą założoną w 2023roku. Specjalizujemy się w
          własnoręcznym wyrabianiu świec sojowoych z największą starannością.
          Jeżeli chcesz dowiedzieć się wiecęj odnośnie histori naszej firmy
          zapraszamy na nasze social media.
        </div>
        <div
          className="d-flex align-items-center flex-column"
          style={{ marginTop: "30px" }}
        >
          <h3>Znajdziesz nas tutaj</h3>
          <img
            src={require("../Pages/Images/googlemaps.jpg")}
            style={{ width: "50%" }}
          ></img>
        </div>
        <div style={{ marginTop: "50px" }}>
          <h3>W skrócie o naszej firmie</h3>
        </div>
        <div
          className={`d-flex  ${
            !matches
              ? "align-items-center flex-column"
              : "justify-content-around flex-row"
          } w-100`}
          style={{ marginBottom: "40px", marginTop: "50px" }}
        >
          <FeatureDiv>
            <FeatureUpperDiv>
              {" "}
              <h5>Szybkość</h5>
              <FlashOnIcon fontSize="large" />
            </FeatureUpperDiv>
            <FeatureLowerDiv>
              Wysłanie zamówienia do naszych klientów zapewniamy już w kolejny
              dzień roboczy
            </FeatureLowerDiv>
          </FeatureDiv>
          <FeatureDiv>
            <FeatureUpperDiv>
              {" "}
              <h5>Staranność</h5>
              <Search
                style={{ width: "30px", height: "30px", marginLeft: "10px" }}
              />
            </FeatureUpperDiv>
            <FeatureLowerDiv>
              Zapewniamy dokładne wykonanie najmniejszych szczegółów naszych
              produktów
            </FeatureLowerDiv>
          </FeatureDiv>
          <FeatureDiv>
            <FeatureUpperDiv>
              {" "}
              <h5>Cena</h5>
              <Cash
                style={{ width: "30px", height: "30px", marginLeft: "10px" }}
              />
            </FeatureUpperDiv>
            <FeatureLowerDiv>
              Jako firma świeżo wchodząca na rynek zapewniamy niskie ceny
              naszych produktów
            </FeatureLowerDiv>
          </FeatureDiv>
          <FeatureDiv>
            <FeatureUpperDiv>
              {" "}
              <h5>Kontakt</h5>
              <TelephoneFill
                style={{ width: "30px", height: "30px", marginLeft: "10px" }}
              />
            </FeatureUpperDiv>
            <FeatureLowerDiv>
              Szybki kontakt z naszym supportem w razie problemów z produktem
              lub zamówieniem
            </FeatureLowerDiv>
          </FeatureDiv>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
