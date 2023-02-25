import { addDecorator } from '@storybook/react';

import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { Themes }         from '../../src/app/providers/ThemeProvider';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator';
import { I18nDecorator }  from '../../src/shared/config/storybook/i18nDecorator';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Themes.LIGHT));
addDecorator(RouteDecorator);
addDecorator(I18nDecorator);
