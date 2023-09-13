import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { useParams } from "react-router-dom";
import doctor from "../assets/images/doctor1.png";
import { THEME } from "../assets/themes/theme"; 
import axios from "axios";


const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  const [dentist, setDentist] = useState({});

  const { id } = useParams();

  const fetchDentistByID = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setDentist(res.data);
      });
  };

  useEffect(() => {
    fetchDentistByID();
  }, []);

  return (
    <div className={theme === THEME.darkMode ? "dark home" : ""}>
      <h1 className="title">Dentista</h1>
      <div className="detail">
        <div className="detail-container">
          <h1>{dentist.id}</h1>
          <img src={doctor} alt="dentist-img" />
          <div className="right">
            <h2>{dentist.name}</h2>
            <h3>{dentist.username}</h3>
            <p>{dentist.email}</p>
            <p>{dentist.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
