import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
	test('should render Button', () => {
		render(<Button>foo</Button>);
		expect(screen.getByText('foo')).toBeInTheDocument();
	});
	
	test('should render Button with variant outline', () => {
		render(<Button variant="outline">foo</Button>);
		expect(screen.getByText('foo')).toHaveClass('contained');
	});
});
