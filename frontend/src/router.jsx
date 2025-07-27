import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Library from './pages/Library';
import Events from './pages/Events';
import Certificate from './pages/Certificate';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/members' element={<Members />} />
        <Route path='/library' element={<Library />} />
        <Route path='/events' element={<Events />} />
        <Route path='/certificate' element={<Certificate />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
