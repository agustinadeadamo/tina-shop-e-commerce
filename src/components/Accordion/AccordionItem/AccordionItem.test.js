import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AccordionItem from './';

describe('AccordionItem', () => {
  test('shows content when open', () => {
    render(
      <AccordionItem
        section={{ title: 'Title', content: 'Content' }}
        index={0}
        isOpen={true}
        onClick={() => {}}
      />,
    );
    expect(screen.getByTestId('accordion-content-container-0')).toHaveClass(
      'h-auto',
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('hides content when closed', () => {
    render(
      <AccordionItem
        section={{ title: 'Title', content: 'Content' }}
        index={0}
        isOpen={false}
        onClick={() => {}}
      />,
    );
    expect(screen.getByTestId('accordion-content-container-0')).toHaveClass(
      'h-0',
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('calls onClick with the correct index', () => {
    const handleClick = jest.fn();
    render(
      <AccordionItem
        section={{ title: 'Title', content: 'Content' }}
        index={1}
        isOpen={false}
        onClick={handleClick}
      />,
    );
    fireEvent.click(screen.getByTestId('accordion-button-1'));
    expect(handleClick).toHaveBeenCalledWith(1);
  });
});
