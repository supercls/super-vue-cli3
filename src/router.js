// const About = r => require.ensure([], () => r(require('@/views/About.vue')), 'About');
const Home = r => require.ensure([], () => r(require('@/views/Home.vue')), 'Home')
const Index = r => require.ensure([], () => r(require('Views/registered/index.vue')), 'Index')
// const Protocol = r => require.ensure([], () => r(require('Views/registered/protocol.vue')), 'Protocol')
const Parent = r => require.ensure([], () => r(require('Views/parentTool/index.vue')), 'Parent')
const Doctor = r => require.ensure([], () => r(require('Views/doctorTool/index.vue')), 'Doctor')
const Management = r => require.ensure([], () => r(require('Views/parentTool/childManagement/management.vue')), 'management')
const Detail = r => require.ensure([], () => r(require('Views/parentTool/selfMonitoring/detail.vue')), 'Detail')
const demoForm = r => require.ensure([], () => r(require('Views/doctor/index.vue')), 'demoForm')
const EtMain = r => require.ensure([], () => r(require('Views/EtMain/index.vue')), 'EtMain')

import Protocol from 'Views/registered/protocol'

export default [{
  path: '*',
  redirect: '/mediaprocess' //找不到404页面重新定向
},
  {
    path: '/', //首页
    redirect: '/parent', 
    meta: {
      title: '首页' 
    }
  },
  {
    path: '/User',
    component: Index,
    name:'User',
    meta: {
      title: '注册'
    }
  },
  {
    path: '/protocol',
    component: Protocol,
    name:'Protocol',
    meta: {
      title: '用户服务协议'
    }
  },
  {
    path: '/parent',
    component: Parent,
    name:'Parent',
    meta: {
      title: '家长工具'  // 这些以后都要改
    }
  }, {
    path: '/doctor',
    component: Doctor,
    name:'Doctor',
    meta: {
      title: '医生工具'  // 这些以后都要改
    }
  },
  {
    path: '/manage',
    component: Management,
    name:'Management',
    meta: {
      title: '儿童管理'  // 这些以后都要改
    }
  },
  {
    path: '/detail',
    component: Detail,
    name:'Detail',
    meta: {
      title: '自主监测'  // 这些以后都要改
    }
  },
  {
    path: '/demoForm',   //form demo
    component: demoForm,
    name:'demoForm',
    meta: {
        title: 'demoForm'
    }
  },
  {
      path: '/mainRegister',   //儿童资料注册
      component: EtMain,
      name:'EtMain',
      meta: {
          title: '儿童资料注册'
      }
  }
]
