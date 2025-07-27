import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Certificados() {
  const [clave, setClave] = useState("");
  const [resultado, setResultado] = useState("");

  const solicitarCertificado = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/certificados`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clave }),
    });

    if (res.ok) {
      const data = await res.blob();
      const url = URL.createObjectURL(data);
      setResultado(url);
    } else {
      setResultado("Error: clave no válida o no autorizado.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="text-xl font-bold mb-4">Solicitar Certificado</h2>
        <input
          type="password"
          placeholder="Clave de autorización"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />
        <button onClick={solicitarCertificado}>Generar</button>
        {resultado && (
          <div>
            {resultado.startsWith("http") ? (
              <a href={resultado} target="_blank" rel="noreferrer">Descargar Certificado</a>
            ) : (
              <p>{resultado}</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Certificados;
