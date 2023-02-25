import type { Story }    from '@storybook/react';
import { Suspense }      from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouteDecorator = (story: () => Story) => (
	<BrowserRouter>
		<Suspense fallback="Loading...">
			{story()}
		</Suspense>
	</BrowserRouter>
);
