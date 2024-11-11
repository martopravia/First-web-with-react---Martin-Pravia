import React from "react";

import Navbar from "./NavBar";
import JumbotronText from "./JumbotronText";
import Cards from "./Cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <JumbotronText />
        <Cards />
      </div>
      <Footer />
    </>
  );
};
export default Home;
