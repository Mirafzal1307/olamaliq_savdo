import Vue from 'vue'

const constants = {
  defaultDirection: 'ltr',
  localeOptions: [
    { id: 'en', name: 'English LTR', direction: 'ltr' },
    { id: 'ru', name: 'Русский', direction: 'ltr' },
    { id: 'uz', name: "O'zbek tili", direction: 'ltr' },
  ],
  defaultLocale: 'en',
  languages: [
    {
      id: 1,
      name: {
        uz: "O'zbekcha",
        ru: 'Узбекский',
        en: 'Uzbek',
      },
      short: 'uz',
    },
    {
      id: 2,
      name: {
        uz: 'Ruscha',
        ru: 'Русский',
        en: 'Russian',
      },
      short: 'ru',
    },
    {
      id: 3,
      name: {
        uz: 'Inglizcha',
        ru: 'Английский',
        en: 'English',
      },
      short: 'en',
    },
  ],
  
}
export default constants
Vue.prototype.$const = constants
