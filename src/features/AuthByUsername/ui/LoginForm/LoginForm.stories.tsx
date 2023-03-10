import { Themes }                             from 'app/providers/ThemeProvider';
import React                                  from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator }                     from 'shared/config/storybook/ThemeDecorator';

import { LoginForm } from './LoginForm';

export default {
	title: 'features/LoginForm',
	component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
