import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from './Accordion';

const accordionItems = [
  { id: 1, title: 'Section 1', content: 'Content 1' },
  { id: 2, title: 'Section 2', content: 'Content 2' },
];

test('only one section is open at a time', () => {
  render(<Accordion accordionItems={accordionItems} />);

  const section1 = screen.getByText('Section 1');
  const section2 = screen.getByText('Section 2');

  fireEvent.click(section1);
  expect(screen.getByText('Content 1')).toBeInTheDocument();
  expect(screen.queryByText('Content 2')).not.toBeInTheDocument();

  fireEvent.click(section2);
  expect(screen.getByText('Content 2')).toBeInTheDocument();
  expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
});
