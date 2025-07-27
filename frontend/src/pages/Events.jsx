import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Events() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchEventos = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/eventos`);
      const data = await res.json();
      setEventos(data);
    };
    fetchEventos();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="text-xl font-bold mb-4">Eventos del Barrio</h2>
        <ul>
          {eventos.map((e) => (
            <li key={e.id}>
              <strong>{e.titulo}</strong> - {e.fecha} ({e.descripcion})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Events;
