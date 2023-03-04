import { Story }           from '@storybook/react';
import { Suspense }        from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n                from 'shared/config/i18n/i18nForTests';

export const I18nDecorator = (story: () => Story) => (
	<Suspense fallback="">
		<I18nextProvider i18n={i18n}>
			{story()}
		</I18nextProvider>
	</Suspense>
);
