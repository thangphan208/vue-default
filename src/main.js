import '../src/plugins/vee-validate'
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css'

//fontawesome icon

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

const  app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
