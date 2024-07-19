import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TicketPage from './TicketPage';

describe('TicketPage', () => {
  test('se renderiza sin errores', () => {
    render(<TicketPage />);
    expect(screen.getByText(/algún texto dentro de TicketPage/i)).toBeInTheDocument();
  });

});