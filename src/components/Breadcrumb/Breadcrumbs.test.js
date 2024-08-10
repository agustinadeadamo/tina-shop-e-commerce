import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Breadcrumb from './';
import { getPathSegments, translateSegment } from '../../utils/urls';

jest.mock('../../utils/urls', () => ({
  getPathSegments: jest.fn(),
  translateSegment: jest.fn(),
}));

const renderBreadcrumbWithRouter = path => {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Breadcrumb />
    </MemoryRouter>,
  );
};

describe('Breadcrumb', () => {
  beforeEach(() => {
    getPathSegments.mockReturnValue(['category', 'subcategory', 'product']);
    translateSegment.mockImplementation(segment => segment.toUpperCase());
  });

  it('renders breadcrumb items and links correctly based on the pathname', () => {
    const { getByText } = renderBreadcrumbWithRouter(
      '/category/subcategory/product',
    );

    const categoryLink = getByText('CATEGORY');
    const subcategoryLink = getByText('SUBCATEGORY');
    const productLink = getByText('PRODUCT');

    expect(categoryLink).toBeInTheDocument();
    expect(subcategoryLink).toBeInTheDocument();
    expect(productLink).toBeInTheDocument();

    expect(categoryLink.closest('a')).toHaveAttribute('href', '/category');
    expect(subcategoryLink.closest('a')).toHaveAttribute(
      'href',
      '/category/subcategory',
    );
    expect(productLink.closest('a')).toHaveAttribute(
      'href',
      '/category/subcategory/product',
    );
  });
});
