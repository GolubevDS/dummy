import i18n                 from 'i18next';
import LanguageDetector     from 'i18next-browser-languagedetector';
import Backend              from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export enum Languages {
	RU = 'ru',
	EN = 'en'
}

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		lng: Languages.RU,
		fallbackLng: Languages.RU,
		debug: __IS_DEV__,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
