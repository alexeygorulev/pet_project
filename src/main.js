import { createApp } from 'vue'
import App from './App.vue'

import routers from './routes'
import '../src/assets/scss/main.scss'

const app = createApp(App)
const cors = require('cors');

app.use(cors)
app.use(routers);
app.mount('#app')
