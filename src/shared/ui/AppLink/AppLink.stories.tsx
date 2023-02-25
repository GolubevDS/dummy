import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Themes }                             from 'app/providers/ThemeProvider';
import React                                  from 'react';
import { ThemeDecorator }                     from 'shared/config/storybook/ThemeDecorator';

import { AppLink } from './AppLink';

export default {
	title: 'shared/AppLink',
	component: AppLink,
	args: {
		to: '/',
	},
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	color: 'primary',
	children: 'AppLink',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
	color: 'primary',
	children: 'AppLink',
};
PrimaryDark.decorators = [ThemeDecorator(Themes.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
	color: 'secondary',
	children: 'AppLink',
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
	color: 'secondary',
	children: 'AppLink',
};
SecondaryDark.decorators = [ThemeDecorator(Themes.DARK)];

export const Text = Template.bind({});
Text.args = {
	color: 'text',
	children: 'AppLink',
};

export const TextDark = Template.bind({});
TextDark.args = {
	color: 'text',
	children: 'AppLink',
};
TextDark.decorators = [ThemeDecorator(Themes.DARK)];
