import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React                                  from 'react';
import { Themes }                             from 'app/providers/ThemeProvider';
import { ThemeDecorator }                     from 'shared/config/storybook/ThemeDecorator';

import { NotFoundPage } from './NotFoundPage';

export default {
	title: 'pages/NotFoundPage',
	component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
