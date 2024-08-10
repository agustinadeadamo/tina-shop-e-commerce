import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithFirebaseMocks } from '../../../utils/firebaseMocks';
import MobileNav from './';

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
    renderWithFirebaseMocks(<MobileNav />);
    expect(screen.getByTestId('menu-toggle-button')).toBeInTheDocument();
    expect(screen.getByTestId('open-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('close-icon')).not.toBeInTheDocument();
  });

  it('toggles the menu visibility when the toggle button is clicked', () => {
    renderWithFirebaseMocks(<MobileNav />);
    const toggleButton = screen.getByTestId('menu-toggle-button');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('close-icon')).toBeInTheDocument();
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
  });

  it('renders NavMenuItems and AuthButton when the menu is open', () => {
    renderWithFirebaseMocks(<MobileNav />);
    fireEvent.click(screen.getByTestId('menu-toggle-button'));
    expect(screen.getByTestId('nav-menu-items')).toBeInTheDocument();
    expect(screen.getByTestId('auth-button')).toBeInTheDocument();
  });
});
