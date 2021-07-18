import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')



export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [ //二级路由。对应App.vue
    //地址为空时跳转home页面
    {
      path: '',
      redirect: '/home'
    },
    //首页城市列表页
    {
      path: '/home',
      component: home
    },
    //当前选择城市页
    {
      path: '/city/:cityid',
      component: city
    }, {
      path: 'chooseAddress', //选择地址
      component: chooseAddress,
      children: [{
        path: 'addAddress', //添加地址
        component: addAddress,
        children: [{
          path: 'searchAddress', //搜索地址
          component: searchAddress,
        }]
      },]
    }
]
}]
