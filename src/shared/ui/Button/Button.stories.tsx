import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React                                  from 'react';

import { Themes }         from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Button } from './Button';

export default {
	title: 'shared/Button',
	component: Button,
	args: {
		style: { display: 'block', marginBottom: '1.5em' },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Click me!',
};

export const Dark = Template.bind({});
Dark.args = {
	children: 'Click me!',
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];

export const Variants: ComponentStory<typeof Button> = (args) => (
	<>
		<Button {...args} variant="contained">
			Contained
		</Button>
		<Button {...args} variant="outline">
			Outline
		</Button>
		<Button {...args} variant="text">
			Text
		</Button>
	</>
);
Variants.argTypes = {
	variant: { table: { disable: true } },
};

export const Sizes: ComponentStory<typeof Button> = (args) => (
	<>
		<Button {...args} size="large">
			Large
		</Button>
		<Button {...args} size="medium">
			Medium
		</Button>
		<Button {...args} size="small">
			Small
		</Button>
	</>
);
Sizes.argTypes = {
	size: { table: { disable: true } },
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	children: 'Button',
};
Disabled.argTypes = {
	disabled: { table: { disable: true } },
};
