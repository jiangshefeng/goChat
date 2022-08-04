import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')
app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
