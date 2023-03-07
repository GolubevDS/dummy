import { DeepPartial }                from '@reduxjs/toolkit';
import { render }                     from '@testing-library/react';
import type { RenderOptions }         from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import type { ReactElement }          from 'react';
import { I18nextProvider }            from 'react-i18next';
import i18nForTests                   from 'shared/config/i18n/i18nForTests';

interface ComponentRenderOptions extends Omit<RenderOptions, 'queries'> {
	initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (
	component: ReactElement,
	options?: ComponentRenderOptions,
) => {
	return render(
		<StoreProvider initialState={options?.initialState}>
			<I18nextProvider i18n={i18nForTests}>
				{component}
			</I18nextProvider>
		</StoreProvider>,
		options,
	);
};
