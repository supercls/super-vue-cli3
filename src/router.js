const About = r => require.ensure([], () => r(require('@/views/About.vue')), 'About');
const Home = r => require.ensure([], () => r(require('@/views/Home.vue')), 'Home')
export default [{
  path: '*',
  redirect: '/mediaprocess' //找不到404页面重新定向
},
  {
    path: '/', //首页
    redirect: '/Home',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/About',
    component: About,
    meta: {
      title: '胎儿培优'
    }
  },
  {
    path: '/Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
]
