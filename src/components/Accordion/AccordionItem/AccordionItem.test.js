import { render, screen, fireEvent } from '@testing-library/react';
import AccordionItem from './AccordionItem';

test('shows content when open', () => {
  render(
    <AccordionItem
      section={{ title: 'Title', content: 'Content' }}
      index={0}
      isOpen={true}
      onClick={() => {}}
    />,
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
  expect(screen.queryByText('Content')).not.toBeInTheDocument();
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
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledWith(1);
});
