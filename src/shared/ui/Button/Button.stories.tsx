import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Themes }                             from 'app/providers/ThemeProvider';
import React                                  from 'react';
import { ThemeDecorator }                     from 'shared/config/storybook/ThemeDecorator';

import { Button } from './Button';

export default {
	title: 'shared/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Outline = Template.bind({});
Outline.args = {
	variant: 'outline',
	children: 'Button',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
	variant: 'outline',
	children: 'Button',
};
OutlineDark.decorators = [ThemeDecorator(Themes.DARK)];

export const Text = Template.bind({});
Text.args = {
	variant: 'text',
	children: 'Button',
};

export const TextDark = Template.bind({});
TextDark.args = {
	variant: 'text',
	children: 'Button',
};
TextDark.decorators = [ThemeDecorator(Themes.DARK)];
