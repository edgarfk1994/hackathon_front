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

const ContactPage: React.FC = () => {
  const [data, setData] = useState<HelpDeskTicket[]>([]);
  const SERVER_URL = "http://localhost:8000/helpdesk";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{data: HelpDeskTicket[]}>(SERVER_URL);
        setData(response.data.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Add Help Desk</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Case</th>
            <th>Status</th>
            <th>Country</th>
            <th>Semaphore</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>FK-{item.id}</td>
              <td>{item.name}</td>
              <td>{item.case}</td>
              <td style={{ color: item.status === 'FK001' ? 'green' : 'red' }}>{item.status}</td>
              <td>{item.country}</td>
              <td style={{ backgroundColor: item.status === 'FK001' ? 'green' : 'red' }}></td>            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactPage;