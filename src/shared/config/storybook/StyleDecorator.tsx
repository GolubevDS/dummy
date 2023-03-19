import 'app/styles/index.scss';
import type { Story } from '@storybook/react';

const style = {
	padding: '24px',
};

export const StyleDecorator = (story: () => Story) => (
	<div style={style}>
		{story()}
	</div>
);
