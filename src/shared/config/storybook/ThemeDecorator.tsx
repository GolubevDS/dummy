import { Story }                 from '@storybook/react';
import { ThemeProvider, Themes } from 'app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Themes) => (StoryComponent: Story) => (
	<ThemeProvider initialTheme={theme}>
		<StoryComponent />
	</ThemeProvider>
);
