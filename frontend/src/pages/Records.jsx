import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Records() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    const fetchRegistros = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/registros`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setRegistros(data);
    };
    fetchRegistros();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="text-xl font-bold mb-4">Registros históricos</h2>
        <ul>
          {registros.map((r) => (
            <li key={r.id}>
              <strong>{r.miembro}</strong> - {r.descripcion} ({r.fecha})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Records;
