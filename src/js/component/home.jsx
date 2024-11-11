import React from "react";

import Navbar from "./NavBar";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        Prueba
        <div className="jumbotron">Prueba</div>
        <div className="cards">Prueba</div>
      </div>
      <div className="footer">Prueba</div>
    </>
  );
};
export default Home;
