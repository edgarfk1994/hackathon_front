import '../css/dashboard.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface HelpDeskTicket {
  id: number;
  name: string;
  case: string;
  status: string;
  createdAt: string;
  country: string;
}

interface FormState {
    name: string;
    case: string;
    email: string;
    status: string;
    country: string;
  }

  const initialState = {
    name: '',
    case: '',
    email: '',
    status: '',
    country: '',
  };

const TicketPage: React.FC = () => {
    const SERVER_URL = "http://localhost:8000/helpdesk";

    const [formData, setFormData] = useState<FormState>({ name: '', case: '', email: '', status: '', country: '' });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Enviando formulario:', formData);
      try {
        await axios.post(SERVER_URL, formData);
        setFormData(initialState);
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
      }
    };

  return (
    <div>
        <h1>Ingresa el Ticket</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre del Agente" required/>
            <input type="text" name="case" value={formData.case} onChange={handleChange} placeholder="Descripción del caso" required/>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email del Agente" required/>
            <input type="text" name="status" value={formData.status} onChange={handleChange} placeholder="Estatus del caso" required/>
            <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="País" required/>
            <button type="submit">Enviar</button>
        </form>
    </div>
  );
};

export default TicketPage;