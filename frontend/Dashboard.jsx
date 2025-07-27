import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [clave, setClave] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clave })
    });

    if (res.ok) {
      const { token } = await res.json();
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } else {
      alert("Clave inválida o usuario no registrado");
    }
  };

  return (
    <div className="login-container">
      <h1>Bienvenido al Barrio</h1>
      <input
        type="password"
        placeholder="Ingresa tu clave"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
      />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}

export default Login;
