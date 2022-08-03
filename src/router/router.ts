import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Chat from '../page/chat/chat.vue'
import chatMain from '@/page/chat/chatMain.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/chat',
    component: Chat,
    children: [
      {
        path: ':id',
        component: chatMain
      }
    ]
  },
  { path: '/', redirect: '/chat' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
