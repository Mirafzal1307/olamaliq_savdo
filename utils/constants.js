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
  services: [
    {
        id: 1,
        image: 'Dostavka.svg',
        title: 'services.delivery',
        desc: 'With big discounts, free delivery and a dedicated support specialist.'
    },
    {
        id: 2,
        image: 'Click.svg',
        title: 'services.payment',
        desc: 'Up to 3 years on-site warranty available for your peace of mind.',

    },
    {
        id: 3,
        image: 'Badge.svg',
        title: 'services.warrenty',
        desc: 'Up to 70% off new Products, you can be sure of the best price.'
    },
    {
        id: 4,
        image: 'Connection.svg',
        title: 'services.support',
        desc: 'Up to 70% off new Products, you can be sure of the best price.'
    },
]
  
}
export default constants
Vue.prototype.$const = constants
