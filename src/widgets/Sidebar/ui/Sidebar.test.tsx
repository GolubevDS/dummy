import { fireEvent, screen }     from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/helpers/tests/renderWithTranslation';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	test('should render Sidebar', () => {
		renderWithTranslation(<Sidebar />);
		
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	
	test('should toggle collapsed state when button is clicked', () => {
		renderWithTranslation(<Sidebar />);
		
		const sidebar = screen.getByTestId('sidebar');
		const toggleBtn = screen.getByTestId('toggle');
		
		expect(sidebar).not.toHaveClass('collapsed');
		fireEvent.click(toggleBtn);
		expect(sidebar).toHaveClass('collapsed');
		fireEvent.click(toggleBtn);
		expect(sidebar).not.toHaveClass('collapsed');
	});
});
