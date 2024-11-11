import React from "react";

import Navbar from "./NavBar";
import JumbotronText from "./JumbotronText";
import Cards from "./Cards";
import Footer from "./Footer";

const Home = () => {
  const jumbotronText = {
    title: "Bienvenido al viaje de tu vida!",
    description: `En nuestra agencia de viajes, te ofrecemos los mejores paquetes para
          que vivas experiencias únicas, con total respaldo y seguridad. Nos
          encargamos de cada detalle, para que solo tengas que disfrutar. Confiá
          en nuestro equipo y descubrí destinos increíbles sin contratiempos.
          ¡Tu aventura perfecta empieza aquí! `,
    button: "Ver paquetes de viajes!",
  };

  const footer = {
    title: "Tu Agencia Digital © ",
    year: "2024",
  };

  const navBar = {
    title: "Tu Agencia Digital",
    botonInicio: "Inicio",
    botonQuienes: "Quienes somos",
    botonPaquetes: "Paquetes",
    botonContactenos: "Contáctenos",
  };

  return (
    <>
      <Navbar {...navBar} />

      <div className="container">
        <JumbotronText {...jumbotronText} />
        <Cards />
      </div>
      <Footer {...footer} />
    </>
  );
};

export default Home;
