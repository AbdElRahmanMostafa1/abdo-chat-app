import {I18n} from 'i18n-js';
import ar from './ar.json';
import en from './en.json';
// import {store} from '@src/state';
import Lang from './en.json';
const LANG = Lang;

export const i18n = new I18n({ar, en});
i18n.defaultLocale = 'en';

// store.subscribe(() => {
//   const state = store.getState();
//   const {lang} = state.langState;
//   i18n.locale = lang;
//   i18n.enableFallback = true;
// });

export function translate(key: keyof typeof LANG) {
  return i18n.t(key);
}
