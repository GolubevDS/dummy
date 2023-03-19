import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
	it('renders the button with the correct text', () => {
		render(<Button>Click me</Button>);
		expect(screen.getByText('Click me')).toBeInTheDocument();
	});
	
	it('adds the "disabled" class when the button is disabled', () => {
		render(<Button disabled>Click me</Button>);
		expect(screen.getByText('Click me')).toHaveClass('disabled');
	});
	
	it('adds the "outline" class when the variant is set to "outline"', () => {
		render(<Button variant="outline">Click me</Button>);
		expect(screen.getByText('Click me')).toHaveClass('outline');
	});
	
	it('adds the "large" class when the size is set to "large"', () => {
		render(<Button size="large">Click me</Button>);
		expect(screen.getByText('Click me')).toHaveClass('large');
	});
	
	it('calls the onClick callback when the button is clicked', () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>Click me</Button>);
		fireEvent.click(screen.getByText('Click me'));
		expect(handleClick).toHaveBeenCalled();
	});
});
