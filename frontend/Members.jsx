import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Members() {
  const [miembros, setMiembros] = useState([]);

  useEffect(() => {
    const fetchMiembros = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/miembros`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setMiembros(data);
    };
    fetchMiembros();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="text-xl font-bold mb-4">Miembros del Barrio</h2>
        <ul>
          {miembros.map((miembro) => (
            <li key={miembro.id}>
              {miembro.nombre_completo} - {miembro.llaves.join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Members;
