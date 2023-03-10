import React                                  from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Themes }                             from 'app/providers/ThemeProvider';
import { ThemeDecorator }                     from 'shared/config/storybook/ThemeDecorator';

import { Modal } from './Modal';

export default {
	title: 'shared/Modal',
	component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
	<div className="app">
		<Modal {...args} />
	</div>
);

export const Light = Template.bind({});
Light.args = {
	isOpen: true,
	children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
};

export const Dark = Template.bind({});
Dark.args = {
	isOpen: true,
	children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
