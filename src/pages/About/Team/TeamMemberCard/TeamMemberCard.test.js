import React from 'react';
import { render, screen } from '@testing-library/react';
import TeamMemberCard from './';

const mockMember = {
  name: 'John Doe',
  role: 'Software Engineer',
  image: 'https://via.placeholder.com/150',
};

describe('TeamMemberCard', () => {
  it('renders the member image, name, and role correctly', () => {
    render(<TeamMemberCard member={mockMember} />);

    // Verifica que la imagen se renderiza con el alt correcto
    const image = screen.getByAltText(mockMember.name);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockMember.image);

    // Verifica que el nombre y rol se renderizan
    expect(screen.getByText(mockMember.name)).toBeInTheDocument();
    expect(screen.getByText(mockMember.role)).toBeInTheDocument();
  });

  it('applies hover effects correctly', () => {
    render(<TeamMemberCard member={mockMember} />);

    const overlay = screen.getByText(mockMember.name).closest('div').parentNode;

    // Verifica que inicialmente el overlay es transparente
    expect(overlay).toHaveClass('opacity-0');

    // Simula un hover y verifica que el overlay se vuelve visible
    overlay.parentNode.dispatchEvent(
      new MouseEvent('mouseover', { bubbles: true }),
    );
    expect(overlay).toHaveClass('opacity-100');
  });
});
