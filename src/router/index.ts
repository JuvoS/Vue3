import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("/@/views/home.vue"),
  },
  {
    path: "/editor",
    name: "editor",
    component: () => import("/@/views/editor.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("/@/views/about.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("/@/views/login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to: any, from: any, next: any) => {
  //判断该用户有没有登录过
  // if(to.path === '/Login'){
  //     if (localStorage.getItem('userInfo')) {
  //         next({ path: '' })
  //     }else{
  //         next();
  //     }
  // }else{
  //     if (localStorage.getItem('userInfo')) {
  //         if(to.path ==='/home/'){
  //             next({ path: '/home' })
  //         }else{
  next();
  //         }
  //     }else{
  //         next({ path: '/Login' })
  //     }
  // }
});

router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
});

export default router;
