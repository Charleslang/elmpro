import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Discover = () => import('views/discover/Discover')
const Order = () => import('views/order/Order')
const Profile = () => import('views/profile/Profile')
const Category = () => import('views/category/Category')
const BusinessInfo = () => import('views/business/BusinessInfo')
const BusinessOrder = () => import('views/business/order/BusinessOrder')
const Pay = () => import('views/pay/Pay')
const UserAddress = () => import('views/address/UserAddress')
const EditAddress = () => import('views/address/EditAddress')
const Login = () => import('views/login/Login')
const Register = () => import('views/register/Register')

// 连续多次点击报错解决
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '饿了么 首页'
    }
  },
  {
    path: '/discover',
    component: Discover,
    meta: {
      title: '饿了么 发现'
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      title: '饿了么 我的订单'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '饿了么 个人中心'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '饿了么 商家列表'
    }
  },
  {
    path: '/businessInfo',
    component: BusinessInfo,
    meta: {
      title: '饿了么 商家信息'
    }
  },
  {
    path: '/businessOrder',
    component: BusinessOrder,
    meta: {
      title: '饿了么 确认订单'
    }
  },
  {
    path: '/pay',
    component: Pay,
    meta: {
      title: '饿了么 在线支付'
    }
  },
  {
    path: '/address',
    component: UserAddress,
    meta: {
      title: '饿了么 地址管理'
    }
  },
  {
    path: '/editAddress/:id?',
    component: EditAddress,
    meta: {
      title: '饿了么 编辑送货地址'
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: '饿了么 用户登录'
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      title: '饿了么 用户注册'
    }
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  let path = to.path
  if (path === '/login' || path === '/register' 
    || path === '/home' || path === '/discover'
    || path === '/profile') { // 登陆注册不需要验证 token
    document.title = to.matched[0].meta.title
    next()
  } else { // 其它操作需要验证 token
    let token = localStorage.getItem('token')
    if (token === null || token === '') {
      next('/login')
    } else {
      if (to.path.indexOf('editAddress') != -1) {
        if (to.params.id) {
            document.title = to.matched[0].meta.title
        } else {
          document.title = '饿了么 新增送货地址'
        }
      } else {
        document.title = to.matched[0].meta.title
      }
      next()
    }
  }
})

export default router