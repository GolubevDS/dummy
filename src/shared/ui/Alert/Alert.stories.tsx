import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React                                  from 'react';

import { Themes }         from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Alert } from './Alert';

export default {
	title: 'shared/Alert',
	component: Alert,
	args: {
		title: 'Lorem ipsum.',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		style: { marginBottom: '24px' },
	},
	argTypes: {
		style: { table: { disable: true } },
	},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Closable = Template.bind({});
Closable.args = {
	closable: true,
};

export const Types: ComponentStory<typeof Alert> = (args) => (
	<>
		<Alert {...args} showIcon type="success" />
		<Alert {...args} showIcon type="warning" />
		<Alert {...args} showIcon type="info" />
		<Alert {...args} showIcon type="error" />
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
