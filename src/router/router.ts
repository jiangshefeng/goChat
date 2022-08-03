import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Chat from '../page/chat/chat.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Chat
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
