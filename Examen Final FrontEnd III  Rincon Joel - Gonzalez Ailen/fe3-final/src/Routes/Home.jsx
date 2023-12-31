import React, { useContext,} from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { THEME } from "../assets/themes/theme"; //1

const Home = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  const dentists = state.dentists;
  const favs = state?.favs;



  return (
    <main className={theme === THEME.darkMode ? "dark home" : ""}>
      <h1 id="title">Home</h1>
      <div className="card-grid">
        {dentists.map((dentist, index) => {
          return <Card dentist={dentist} key={index} />;
        })}
      </div>
    </main>
  );
};

export default Home;
