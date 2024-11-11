import React from "react";

import Navbar from "./NavBar";
import JumbotronText from "./JumbotronText";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <JumbotronText />
        <div className="cards">Prueba</div>
        <div className="footer">Prueba</div>
      </div>
    </>
  );
};
export default Home;
