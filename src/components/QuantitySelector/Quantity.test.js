import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuantitySelector from './QuantitySelector';

describe('QuantitySelector', () => {
  const defaultProps = {
    quantity: 2,
    increaseQuantity: jest.fn(),
    decreaseQuantity: jest.fn(),
    disabled: false,
  };

  it('displays the correct quantity', () => {
    render(<QuantitySelector {...defaultProps} />);

    // Verifica que el valor de cantidad se muestra correctamente
    const quantityInput = screen.getByLabelText(/quantity/i);
    expect(quantityInput).toHaveValue(2);
  });

  it('calls increaseQuantity when the increment button is clicked', () => {
    render(<QuantitySelector {...defaultProps} />);

    // Simula un clic en el botón de incrementar cantidad
    const incrementButton = screen.getByLabelText(/increase quantity/i);
    fireEvent.click(incrementButton);

    // Verifica que la función de incrementar se haya llamado
    expect(defaultProps.increaseQuantity).toHaveBeenCalled();
  });

  it('calls decreaseQuantity when the decrement button is clicked', () => {
    render(<QuantitySelector {...defaultProps} />);

    // Simula un clic en el botón de decrementar cantidad
    const decrementButton = screen.getByLabelText(/decrease quantity/i);
    fireEvent.click(decrementButton);

    // Verifica que la función de decrementar se haya llamado
    expect(defaultProps.decreaseQuantity).toHaveBeenCalled();
  });

  it('disables the buttons when disabled is true', () => {
    render(<QuantitySelector {...defaultProps} disabled />);

    // Verifica que los botones estén deshabilitados cuando la prop `disabled` es verdadera
    const incrementButton = screen.getByLabelText(/increase quantity/i);
    const decrementButton = screen.getByLabelText(/decrease quantity/i);
    expect(incrementButton).toBeDisabled();
    expect(decrementButton).toBeDisabled();
  });

  it('renders the input as read-only', () => {
    render(<QuantitySelector {...defaultProps} />);

    // Verifica que el input de cantidad es de solo lectura
    const quantityInput = screen.getByLabelText(/quantity/i);
    expect(quantityInput).toHaveAttribute('readonly');
  });
});
