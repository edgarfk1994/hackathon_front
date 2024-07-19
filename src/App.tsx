import './css/home.css';
import React, { useState } from 'react';
import axios from 'axios';
import ContactPage from './pages/dashboard'; 
import TicketPage from './pages/ticket'; 
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App: React.FC = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<ContactPage />} />
        <Route path="/ticket" element={<TicketPage />} />
      </Routes>
      
      <div className="links-container">

        <Link to="/ticket" className="dashboard-link">
          Generar tickets
        </Link>
      
        <Link to="/dashboard" className="dashboard-link">
          Ir al Dashboard
        </Link>
      </div>
    </Router>
  );
};


export default App;