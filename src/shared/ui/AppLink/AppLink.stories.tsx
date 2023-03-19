import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React                                  from 'react';

import { Themes }         from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { AppLink } from './AppLink';

export default {
	title: 'shared/AppLink',
	component: AppLink,
	args: {
		to: '/',
	},
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Link',
};

export const Dark = Template.bind({});
Dark.args = {
	children: 'Link',
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];

export const Types: ComponentStory<typeof AppLink> = (args) => (
	<>
		<AppLink {...args} type="primary">primary</AppLink>
		<AppLink {...args} type="secondary">secondary</AppLink>
		<AppLink {...args} type="success">primary</AppLink>
		<AppLink {...args} type="warning">warning</AppLink>
		<AppLink {...args} type="info">info</AppLink>
		<AppLink {...args} type="error">error</AppLink>
	</>
);
Types.argTypes = {
	type: { table: { disable: true } },
};

export const TypesDark = Types.bind({});
TypesDark.argTypes = {
	type: { table: { disable: true } },
};
TypesDark.decorators = [ThemeDecorator(Themes.DARK)];
