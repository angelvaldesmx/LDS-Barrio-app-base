// frontend/src/components/Intro.jsx
import React, { useEffect, useState } from 'react';
import './Intro.css';
import logo from '../assets/logo-lds.png';

export default function Intro({ onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 3000); // duración de la intro (3 segundos)
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="intro">
      <img src={logo} alt="Logo LDS" className="logo-intro" />
    </div>
  );
};
export default Intro;
