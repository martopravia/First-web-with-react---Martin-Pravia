import React from "react";

import Navbar from "./NavBar";
import JumbotronText from "./JumbotronText";
import Cards from "./Cards";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <JumbotronText />
        <Cards />
        <div className="cards">Prueba</div>
        <div className="footer">Prueba</div>
      </div>
    </>
  );
};
export default Home;
