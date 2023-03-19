import { render, screen } from '@testing-library/react';

import { Typography } from './Typography';

describe('Typography', () => {
	it('renders with default props', () => {
		render(<Typography>Foo</Typography>);
		const element = screen.getByText('Foo');
		expect(element).toBeInTheDocument();
		expect(element.tagName).toBe('P');
		expect(element).toHaveClass('body1');
	});
	
	it('renders with h1 variant', () => {
		render(<Typography variant="h1">Foo</Typography>);
		const element = screen.getByText('Foo');
		expect(element).toBeInTheDocument();
		expect(element.tagName).toBe('H1');
		expect(element).toHaveClass('h1');
	});
	
	it('renders with success type', () => {
		render(<Typography type="success">Foo</Typography>);
		const element = screen.getByText('Foo');
		expect(element.tagName).toBe('P');
		expect(element).toHaveClass('success');
	});
	
	it('renders with span component', () => {
		render(<Typography component="span">Foo</Typography>);
		const element = screen.getByText('Foo');
		expect(element.tagName).toBe('SPAN');
	});
	
	it('renders with custom className', () => {
		render(<Typography className="custom-class">Foo</Typography>);
		const element = screen.getByText('Foo');
		expect(element).toHaveClass('custom-class');
	});
});
