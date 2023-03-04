import { render }             from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import type { ReactElement }  from 'react';
import { I18nextProvider }    from 'react-i18next';
import i18n                   from 'shared/config/i18n/i18nForTests';

export const renderWithTranslation = (
	component: ReactElement,
	options?: Omit<RenderOptions, 'queries'>,
) => {
	return render(
		<I18nextProvider i18n={i18n}>
			{component}
		</I18nextProvider>,
		options,
	);
};
