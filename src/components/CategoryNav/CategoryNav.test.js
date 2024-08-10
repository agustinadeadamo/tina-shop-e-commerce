import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CategoryNav from './';
import CATEGORY_MAP from '../../constants/categories';

describe('CategoryNav', () => {
  it('renders category navigation links', () => {
    render(
      <MemoryRouter>
        <CategoryNav />
      </MemoryRouter>
    );

    // Verifica que todas las categorías están presentes
    Object.values(CATEGORY_MAP).forEach((displayCategory) => {
      const categoryText =
        displayCategory.charAt(0).toUpperCase() + displayCategory.slice(1);
      expect(screen.getByText(categoryText)).toBeInTheDocument();
    });
  });

  it('has correct links for each category', () => {
    render(
      <MemoryRouter>
        <CategoryNav />
      </MemoryRouter>
    );

    // Verifica que cada enlace apunta a la URL correcta
    Object.entries(CATEGORY_MAP).forEach(([urlCategory, displayCategory]) => {
      const categoryText =
        displayCategory.charAt(0).toUpperCase() + displayCategory.slice(1);
      const linkElement = screen.getByText(categoryText);
      expect(linkElement.closest('a')).toHaveAttribute(
        'href',
        `/store/${urlCategory}`
      );
    });
  });
});
