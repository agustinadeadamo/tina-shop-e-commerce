import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './';

describe('Modal', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    children: <div>Modal Content</div>,
  };

  it('does not render the modal when isOpen is false', () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders the modal when isOpen is true', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByLabelText(/close modal/i));
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('applies the custom width class when provided', () => {
    render(<Modal {...defaultProps} width="md:max-w-screen-lg" />);
    const modalElement = screen.getByRole('dialog').firstChild;
    expect(modalElement).toHaveClass('md:max-w-screen-lg');
  });
});
