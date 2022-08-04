import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Chat from '../page/chat/chat.vue'
import chatMain from '@/page/chat/chatMain.vue'
import Friends from '../page/friends/friends.vue'
import Collection from '../page/collection/collection.vue'
export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/chat' },
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

  {
    path: '/friends',
    component: Friends
  },
  {
    path: '/collection',
    component: Collection
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
