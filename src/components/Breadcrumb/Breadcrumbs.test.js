import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';
import { getPathSegments, translateSegment } from '../../utils/urls';

// Mock de las funciones utilitarias
jest.mock('../../utils/urls', () => ({
  getPathSegments: jest.fn(),
  translateSegment: jest.fn(),
}));

describe('Breadcrumb', () => {
  it('renders breadcrumb items correctly based on the pathname', () => {
    getPathSegments.mockReturnValue(['category', 'subcategory', 'product']);
    translateSegment.mockImplementation(segment => segment.toUpperCase());

    const { getByText } = render(
      <MemoryRouter initialEntries={['/category/subcategory/product']}>
        <Breadcrumb />
      </MemoryRouter>,
    );

    expect(getByText('CATEGORY')).toBeInTheDocument();
    expect(getByText('SUBCATEGORY')).toBeInTheDocument();
    expect(getByText('PRODUCT')).toBeInTheDocument();
  });

  it('renders links with the correct paths', () => {
    getPathSegments.mockReturnValue(['category', 'subcategory', 'product']);
    translateSegment.mockImplementation(segment => segment.toUpperCase());

    const { getByText } = render(
      <MemoryRouter initialEntries={['/category/subcategory/product']}>
        <Breadcrumb />
      </MemoryRouter>,
    );

    expect(getByText('CATEGORY').closest('a')).toHaveAttribute(
      'href',
      '/category',
    );
    expect(getByText('SUBCATEGORY').closest('a')).toHaveAttribute(
      'href',
      '/category/subcategory',
    );
    expect(getByText('PRODUCT').closest('a')).toHaveAttribute(
      'href',
      '/category/subcategory/product',
    );
  });
});

describe('BreadcrumbItem', () => {
  it('renders a breadcrumb item with the correct segment name and link', () => {
    translateSegment.mockReturnValue('CATEGORY');
    const { getByText } = render(
      <MemoryRouter>
        <BreadcrumbItem
          segment="category"
          index={0}
          pathSegments={['category']}
        />
      </MemoryRouter>,
    );

    const link = getByText('CATEGORY');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '/category');
  });
});
