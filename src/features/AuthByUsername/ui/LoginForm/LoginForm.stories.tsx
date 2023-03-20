import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React                                  from 'react';

import { Themes }         from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { LoginForm } from './LoginForm';

export default {
	title: 'features/LoginForm',
	component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];

export const WithError = Template.bind({});
WithError.decorators = [StoreDecorator({
	loginForm: { error: 'ERROR' },
})];

export const Loading = Template.bind({});
Loading.decorators = [StoreDecorator({
	loginForm: { isLoading: true },
})];

export const Dark = Template.bind({});
Dark.decorators = [
	ThemeDecorator(Themes.DARK),
	StoreDecorator({}),
];
