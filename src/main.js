import { createApp } from 'vue'
import App from './App.vue'
import mixin from '@/maxins'
import router from './router'
import store from './store'
import PageTitle from '@/components/fragments/PageTitle.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import i18nPlugin from './plugins/i18n'
import en from '@/i18n/en'
import ko from '@/i18n/ko'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faUserClock } from '@fortawesome/free-solid-svg-icons'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

library.add(faUserSecret)
library.add(faUserClock)

const i18nStrings = { en, ko }

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueSweetalert2)
app.mixin(mixin)
app.use(i18nPlugin, i18nStrings)
app.component('page-tile', PageTitle)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
