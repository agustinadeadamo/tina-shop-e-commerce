import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MobileNav from './';

jest.mock('firebase/app', () => {
  return {
    initializeApp: jest.fn(),
  };
});

jest.mock('firebase/auth', () => {
  return {
    getAuth: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    signOut: jest.fn(),
    onAuthStateChanged: jest.fn(),
  };
});

jest.mock('firebase/firestore', () => {
  return {
    getFirestore: jest.fn(),
    collection: jest.fn(),
    getDocs: jest.fn(),
  };
});

jest.mock('../NavMenuItems', () => () => (
  <div data-testid="nav-menu-items">NavMenuItems</div>
));
jest.mock('../CartButton', () => () => (
  <button data-testid="cart-button">CartButton</button>
));
jest.mock('../AuthButton', () => () => (
  <button data-testid="auth-button">AuthButton</button>
));

describe('MobileNav', () => {
  it('renders the menu toggle button with correct icon when menu is closed', () => {
    render(<MobileNav />);
    expect(screen.getByTestId('menu-toggle-button')).toBeInTheDocument();
    expect(screen.getByTestId('open-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('close-icon')).not.toBeInTheDocument();
  });

  it('toggles the menu visibility when the toggle button is clicked', () => {
    render(<MobileNav />);
    const toggleButton = screen.getByTestId('menu-toggle-button');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('close-icon')).toBeInTheDocument();
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
  });

  it('renders NavMenuItems and AuthButton when the menu is open', () => {
    render(<MobileNav />);
    fireEvent.click(screen.getByTestId('menu-toggle-button'));
    expect(screen.getByTestId('nav-menu-items')).toBeInTheDocument();
    expect(screen.getByTestId('auth-button')).toBeInTheDocument();
  });
});
