import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Chat from '../page/chat/chat.vue'
import Home from '@/views/Home.vue'



import chatMain from '@/page/chat/chatMain.vue'
import Friends from '../page/friends/friends.vue'
import Collection from '../page/collection/collection.vue'
export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login' },

  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
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
// router.beforeEach((to,from,next)=>{
//   if(to.path=='/login'){
//     next()
//     console.log(localStorage.s)
//   }
//   else{
//     if(from.path=='/login') { next()}
//     else{
//       if(localStorage.s==="true"){
//         next();
//         console.log(localStorage['s'])
//       }
//       else{
//         next('/login');
//         console.log("需要登录")
//       }
//     }
//   }
// })
export default router
