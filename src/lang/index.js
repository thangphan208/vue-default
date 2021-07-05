import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enLang from './en';
const lang = {
    en: enLang
};
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: 'ja',
    messages: lang,
    fallbackLocale: 'en',
    silentFallbackWarn: true
});

export default i18n;
