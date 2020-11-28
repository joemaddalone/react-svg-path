import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cache from 'i18next-localstorage-cache';
import en from './en.json';

const capitalizeFirst = (str) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const capitalizeAll = (str) => {
  if (!str) return;
  return str
    .split(' ')
    .map((str) => capitalizeFirst(str))
    .join(' ');
};

i18n
  .use(Cache)
  .use(LanguageDetector)
  .init({
    interpolation: {
      escapeValue: false,
      format: function (value, format) {
        switch (format) {
          case 'uppercase':
            return value.toUpperCase();
          case 'capitalize':
            return capitalizeAll(value);
          case 'lowercase':
            return value.toLowerCase();
          case 'sentence':
            return capitalizeFirst(value);
          default:
            return value;
        }
      }
    },
    resources: { en },
    fallbackLng: 'en',
    react: {
      useSuspense: false
    }
  });

export const setNamespace = (keys) => (value, options = {}) => {
  return i18n.t(value, { ns: [...keys], ...options }) || value;
};

export const translate = (path, options) => {
  const [namespace, ...rest] = path.split('.');
  const t = setNamespace([namespace]);
  return t(rest.join('.'), options);
};

export default i18n;
