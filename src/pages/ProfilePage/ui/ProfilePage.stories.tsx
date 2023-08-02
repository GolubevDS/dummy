import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React                                  from 'react';

import { Themes }         from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import ProfilePage from './ProfilePage';

export default {
	title: 'pages/ProfilePage',
	component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Themes.DARK), StoreDecorator({})];
