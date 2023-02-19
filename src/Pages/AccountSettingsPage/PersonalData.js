import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPersonalData } from "../../Redux/Slices/PersonalDataSlice";

const PersonalData = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.personalData.personalData);
  const [isSave, setIsSave] = useState(false);
  const [name, setName] = useState(data.name);
  const [surname, setSurname] = useState(data.surname);
  const [birthDate, setBirthDate] = useState(data.birthDate);
  const [city, setCity] = useState(data.city);
  const [zipCode, setZipCode] = useState(data.zipCode);
  const [street, setStreet] = useState(data.street);
  const [houseNumber, setHouseNum] = useState(data.houseNumber);
  const getName = (event) => {
    setName(event.target.value);
  };
  const getSurname = (event) => {
    setSurname(event.target.value);
  };
  const getBirthDate = (event) => {
    setBirthDate(event.target.value);
  };
  const getCity = (event) => {
    setCity(event.target.value);
  };
  const getZipCode = (event) => {
    setZipCode(event.target.value);
  };
  const getStreet = (event) => {
    setStreet(event.target.value);
  };
  const getHouseNum = (event) => {
    setHouseNum(event.target.value);
  };
  const save = () => {
    setIsSave(!isSave);
    const element = {
      name,
      surname,
      birthDate,
      city,
      zipCode,
      street,
      houseNumber,
    };

    dispatch(setPersonalData(element));
  };

  return (
    <div className="d-flex align-items-center flex-column ">
      <h1>Dane osobowe</h1>

      <a>Imię</a>
      <input onChange={getName} defaultValue={data.name} />

      <a>Nazwisko</a>
      <input onChange={getSurname} defaultValue={data.surname} />

      <a>Data urodzenia</a>
      <input
        type="date"
        onChange={getBirthDate}
        defaultValue={data.birthDate}
      />

      <a>Miasto</a>
      <input onChange={getCity} defaultValue={data.city} />

      <a>Kod pocztowy</a>
      <input onChange={getZipCode} defaultValue={data.zipCode} />

      <a>Ulica</a>
      <input onChange={getStreet} defaultValue={data.street} />

      <a>Numer mieszkania/domu</a>
      <input onChange={getHouseNum} defaultValue={data.houseNumber} />

      <Button
        style={{ marginTop: "10px", marginBottom: "60px" }}
        className={isSave ? "btn-secondary" : "btn-primary"}
        onClick={save}
      >
        {isSave ? "Zapisano" : "Zapisz"}
      </Button>
    </div>
  );
};

export default PersonalData;
