import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
const routes: RouteRecordRaw[] = [
  // {
  //   //这里需要将根目录默认为Home，方便实现用户在保持登录 状态下再次登录时直接跳转至主页面
  //   path: "/u",
  //   redirect: {
  //     name: "Home"
  //   }
  // },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    component: () => import("../views/Login.vue"),
  },

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
