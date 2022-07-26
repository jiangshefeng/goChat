import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Chat from '../page/chat/chat.vue'

import chatMain from '@/page/chat/chatMain.vue'
import Friends from '../page/friends/friends.vue'
import friendsMain from '@/page/friends/friendsMain.vue'
import Collection from '../page/collection/collection.vue'
import LayOut from '@/page/layout/layout.vue'
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LayOut,
    redirect: '/chat',
    children: [
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
        component: Friends,
        children: [
          {
            path: ':id',
            component: friendsMain
          }
        ]
      },
      {
        path: '/collection',
        component: Collection
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../page/login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next()
  } else {
    if (from.path == '/login') {
      next()
    } else {
      if (localStorage.getItem('user')) {
        next()
      } else {
        next('/login')
        console.log('需要登录')
      }
    }
  }
})

// export function resetRouter(){
//   const newRouter = createRouter({
//     history: createWebHistory(),
//     routes
//   })
//   router.matcher = newRouter.matcher
// }
export default router
