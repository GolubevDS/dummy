import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React                                  from 'react';

import { Themes }         from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Typography } from './Typography';

export default {
	title: 'shared/Typography',
	component: Typography,
	args: {
		children: 'Lorem ipsum dolor.',
		style: { marginBottom: '1.5em' },
	},
	argTypes: {
		component: { table: { disable: true } },
		style: { table: { disable: true } },
	},
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});

export const Variants: ComponentStory<typeof Typography> = (args) => (
	<>
		<Typography {...args} variant="h1">
			h1. {args.children}
		</Typography>
		<Typography {...args} variant="h2">
			h2. {args.children}
		</Typography>
		<Typography {...args} variant="subtitle">
			subtitle. {args.children}
		</Typography>
		<Typography {...args} variant="body1">
			body1. {args.children}
		</Typography>
		<Typography {...args} variant="body2">
			body2. {args.children}
		</Typography>
	</>
);
Variants.argTypes = {
	variant: { table: { disable: true } },
};

export const Types: ComponentStory<typeof Typography> = (args) => (
	<>
		<Typography {...args} type="primary">
			primary. {args.children}
		</Typography>
		<Typography {...args} type="secondary">
			secondary. {args.children}
		</Typography>
		<Typography {...args} type="success">
			primary. {args.children}
		</Typography>
		<Typography {...args} type="warning">
			warning. {args.children}
		</Typography>
		<Typography {...args} type="info">
			info. {args.children}
		</Typography>
		<Typography {...args} type="error">
			error. {args.children}
		</Typography>
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
