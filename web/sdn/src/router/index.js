import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from '../views/error/NotFoundView'
import UserAccountLoginView from '../views/user/account/UserAccountLoginView'
import HomeIndexView from '../views/home/HomeIndexView'
import store from '../store/index'
import Page1IndexView from '../views/page1/Page1IndexView'
import Page2IndexView from '../views/page2/Page2IndexView'
import Page3IndexView from '../views/page3/Page3IndexView'
import Page4IndexView from '../views/page4/Page4IndexView'
import Page5IndexView from '../views/page5/Page5IndexView'
import Page6IndexView from '../views/page6/Page6IndexView'
import Page7IndexView from '../views/page7/Page7IndexView'


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeIndexView,
    meta: {
      needAuth: true,
    }
  },
  {
    path: "/page1/",
    name: "page1",
    component: Page1IndexView,
    meta: {
      needAuth: true,
    }
  },
  {
    path: "/page2/",
    name: "page2",
    component: Page2IndexView,
    meta: {
      needAuth: true,
    }
  },
  {
    path: "/page3/",
    name: "page3",
    component: Page3IndexView,
    meta: {
      needAuth: true,
    }
  },
  {
    path: "/page4/",
    name: "page4",
    component: Page4IndexView,
    meta: {
      needAuth: true,
    }
  },
  {
    path: "/page5/",
    name: "page5",
    component: Page5IndexView,
    meta: {
      needAuth: true,
    }
  },
  {
    path: "/page6/",
    name: "page6",
    component: Page6IndexView,
    meta: {
      needAuth: true,
    }
  },
  {
    path: "/page7/",
    name: "page7",
    component: Page7IndexView,
    meta: {
      needAuth: true,
    }
  },
  {
    path: "/user/account/login/",
    name: "user_account_login",
    component: UserAccountLoginView,
    meta: {
      // Login模块不需要授权
      needAuth: false,
    }
  },

  {
    // 404模块不需要授权
    path: "/404/",
    name: "404",
    component: NotFoundView,
    meta: {
      needAuth: false,
    }
  },
  // {
  //   // 当输入不合法字符，重定向到404
  //   path: "/:catchAll(.*)",
  //   redirect: "/404/"   //注意有两个反斜杠，不然会堆栈溢出
  // }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})


// 在router进入其他页面之前，会执行beforeEach函数，用于授权前端页面，强制用户登录
router.beforeEach((to, from, next) => {
  // 需要授权但未登录，跳转到login页面
  if (to.meta.needAuth && !store.state.user.is_login) {
    next({ name: "user_account_login" });
  }
  else {
    next();
  }
})

export default router
