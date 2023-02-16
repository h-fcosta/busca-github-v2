import React, { useState } from "react";
import Busca from "./components/Busca";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Resultados from "./components/Resultados";

function App() {
  const [userBusca, setUserBusca] = useState("");

  return (
    <>
      <Navbar />
      <div className="container is-fluid">
        <Busca onUserBusca={setUserBusca} />
        <Resultados userBusca={userBusca} />
        <Footer />
      </div>
    </>
  );
}

export default App;
