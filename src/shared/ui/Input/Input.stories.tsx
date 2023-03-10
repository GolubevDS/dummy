import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Themes }                             from 'app/providers/ThemeProvider';
import { ThemeDecorator }                     from 'shared/config/storybook/ThemeDecorator';

import { Input } from './Input';

export default {
	title: 'shared/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
	<Input {...args} />
);

export const Light = Template.bind({});
Light.args = {
	placeholder: 'foo',
	value: 'bar',
};

export const Dark = Template.bind({});
Dark.args = {
	placeholder: 'foo',
	value: 'bar',
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
