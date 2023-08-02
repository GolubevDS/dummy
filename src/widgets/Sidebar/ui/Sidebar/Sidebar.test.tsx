import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/helpers/tests/componentRender';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	test('should render Sidebar', () => {
		componentRender(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	
	it('should render main and about links', () => {
		componentRender(<Sidebar />);
		expect(screen.getByText(/main/i)).toBeInTheDocument();
		expect(screen.getByText(/about/i)).toBeInTheDocument();
	});
	
	test('should toggle sidebar collapse on click of toggle button', () => {
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
