import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Chat from '../page/chat/chat.vue'
import Home from '@/views/Home.vue'
import { ElMessage } from 'element-plus'


import chatMain from '@/page/chat/chatMain.vue'
import Friends from '../page/friends/friends.vue'
import friendsMain from '@/page/friends/friendsMain.vue'
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

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.path=='/login'){
    next()
    console.log(sessionStorage.loginmsg)
  }
  else{
    if(from.path=='/login') { next()}
    else{
      if(sessionStorage.loginmsg==="success"){
        next();
        console.log(sessionStorage['loginmsg'])
      }
      else{
        next('/login');
        // console.log("需要登录")
        ElMessage.error("需要登录")
      }
    }
  }
})


export function resetRouter(){
  const newRouter = createRouter({
    history: createWebHistory(),
    routes
  })
  router.matcher = newRouter.matcher
}
export default router
