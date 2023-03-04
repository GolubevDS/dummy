import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React                                  from 'react';
import { Themes }                             from 'app/providers/ThemeProvider';
import { ThemeDecorator }                     from 'shared/config/storybook/ThemeDecorator';

import { Navbar } from './Navbar';

export default {
	title: 'widget/Navbar',
	component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
