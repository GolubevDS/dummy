import { fireEvent, screen }     from '@testing-library/react';
import { BrowserRouter }         from 'react-router-dom';
import { renderWithTranslation } from 'shared/lib/helpers/tests/renderWithTranslation';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	test('should render Sidebar', () => {
		renderWithTranslation(<Sidebar />, { wrapper: BrowserRouter });
		
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	
	test('should toggle collapsed state when button is clicked', () => {
		renderWithTranslation(<Sidebar />, { wrapper: BrowserRouter });
		
		const sidebar = screen.getByTestId('sidebar');
		const toggleBtn = screen.getByTestId('toggle');
		
		expect(sidebar).not.toHaveClass('collapsed');
		fireEvent.click(toggleBtn);
		expect(sidebar).toHaveClass('collapsed');
		fireEvent.click(toggleBtn);
		expect(sidebar).not.toHaveClass('collapsed');
	});
});
