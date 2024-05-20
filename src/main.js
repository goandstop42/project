import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PageTitle from '@/components/fragments/PageTitle.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import i18nPlugin from './plugins/i18n'
import en from '@/i18n/en'
import ko from '@/i18n/ko'

const i18nStrings = { en, ko }

const app = createApp(App)
app.use(store)
app.use(router)
app.use(i18nPlugin, i18nStrings)
app.component('page-tile', PageTitle)

app.mount('#app')
