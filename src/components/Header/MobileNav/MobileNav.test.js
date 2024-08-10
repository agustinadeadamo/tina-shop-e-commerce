import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MobileNav from './';

describe('MobileNav', () => {
  it('renders the menu toggle button with correct icon when menu is closed', () => {
    render(<MobileNav />);

    // Verifica que el ícono de hamburguesa (FaBars) esté presente
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/close menu/i)).not.toBeInTheDocument();
  });

  it('toggles the menu visibility when the toggle button is clicked', () => {
    render(<MobileNav />);

    const toggleButton = screen.getByLabelText(/open menu/i);
    fireEvent.click(toggleButton);

    // Verifica que el ícono de cerrar (FaTimes) esté presente
    expect(screen.getByLabelText(/close menu/i)).toBeInTheDocument();

    // Verifica que el menú esté visible
    expect(screen.getByRole('navigation')).toBeInTheDocument();

    // Cierra el menú
    fireEvent.click(screen.getByLabelText(/close menu/i));

    // Verifica que el menú no esté visible
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('renders NavMenuItems and AuthButton when the menu is open', () => {
    render(<MobileNav />);

    // Abre el menú
    fireEvent.click(screen.getByLabelText(/open menu/i));

    // Verifica que los elementos del menú y el botón de autenticación estén presentes
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText(/auth button/i)).toBeInTheDocument(); // Suponiendo que 'AuthButton' muestra este texto
    expect(screen.getByText(/nav item/i)).toBeInTheDocument(); // Suponiendo que 'NavMenuItems' muestra este texto
  });
});
