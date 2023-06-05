import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React                                  from 'react';

import { Themes }         from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Navbar } from './Navbar';

export default {
	title: 'widget/Navbar',
	component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];

export const SignOut = Template.bind({});
SignOut.decorators = [StoreDecorator({ user: { authData: { id: 1, username: 'Foo' } } })];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Themes.DARK), StoreDecorator({})];
