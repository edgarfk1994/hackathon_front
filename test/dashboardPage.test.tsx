import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DashboardPage from './DashboardPage'; // Asegúrate de que la ruta de importación sea correcta

describe('DashboardPage', () => {
  test('se renderiza sin errores', () => {
    render(<DashboardPage />);
    expect(screen.getByTestId('dashboard-page')).toBeInTheDocument();
  });

  test('muestra el contenido esperado', () => {
    render(<DashboardPage />);
    expect(screen.getByText(/contenido específico del dashboard/i)).toBeInTheDocument();
  });

  // Aquí puedes agregar más pruebas, como interacciones o verificar que ciertos elementos se muestren correctamente
});