import { fireEvent, screen } from '@testing-library/react';
import { componentRender }   from 'shared/lib/helpers/tests/componentRender';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	test('should render Sidebar', () => {
		componentRender(<Sidebar />);
		
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	
	test('should toggle collapsed state when button is clicked', () => {
		componentRender(<Sidebar />);
		
		const sidebar = screen.getByTestId('sidebar');
		const toggleBtn = screen.getByTestId('toggle');
		
		expect(sidebar).not.toHaveClass('collapsed');
		fireEvent.click(toggleBtn);
		expect(sidebar).toHaveClass('collapsed');
		fireEvent.click(toggleBtn);
		expect(sidebar).not.toHaveClass('collapsed');
	});
});
