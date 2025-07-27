import React from "react";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Intro />
      <Navbar />
      <main className="home-container">
        {/* Contenido del home */}
        <h1 className="lds-heading">Bienvenido al Barrio</h1>
        <p>Consulta, registra y comparte información histórica y actual.</p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
