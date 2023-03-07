import { fireEvent, screen } from '@testing-library/react';
import { BrowserRouter }     from 'react-router-dom';
import { componentRender }   from 'shared/lib/helpers/tests/componentRender';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	test('should render Sidebar', () => {
		componentRender(<Sidebar />, { wrapper: BrowserRouter });
		
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	
	test('should toggle collapsed state when button is clicked', () => {
		componentRender(<Sidebar />, { wrapper: BrowserRouter });
		
		const sidebar = screen.getByTestId('sidebar');
		const toggleBtn = screen.getByTestId('toggle');
		
		expect(sidebar).not.toHaveClass('collapsed');
		fireEvent.click(toggleBtn);
		expect(sidebar).toHaveClass('collapsed');
		fireEvent.click(toggleBtn);
		expect(sidebar).not.toHaveClass('collapsed');
	});
});
