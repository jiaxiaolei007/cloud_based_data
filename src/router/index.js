import Vue from 'vue'
import VueRouter from 'vue-router'
const taskType = () => import('../components/DS/TaskType')
const basicConfig = () => import('../components/DS/BasicConfig')
const sourceAndTargetConfig = () => import('../components/DS/SourceAndTargetConfig')
const taskConfig = () => import('../components/DS/TaskConfig')
const processValidation = () => import('../components/DS/ProcessValidation')
const taskManage = () => import('../components/DS/TaskManage')
const dataSync=()=>import('../components/DS/DataSync')

Vue.use(VueRouter)
// 解决导航栏或者底部导航tabBar中的vue-router在3.0版本以上频繁点击菜单报错的问题。
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '',
    redirect: '/taskType'
  },
  {
    path: '/taskType',
    name: 'taskType',
    component: taskType
  },
  {
    path: '/basicConfig',
    name: 'basicConfig',
    component: basicConfig
  },
  {
    path: '/sourceAndTargetConfig',
    name: 'sourceAndTargetConfig',
    component: sourceAndTargetConfig
  },
  {
    path: '/taskConfig',
    name: 'taskConfig',
    component: taskConfig
  },
  {
    path: '/processValidation',
    name: 'processValidation',
    component: processValidation,
  },
  {
    path: '/taskManage',
    name: 'taskManage',
    component: taskManage
  },
  {
    path: '/dataSync',
    name: 'dataSync',
    component: dataSync
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 在sessionStorage里面存储to，from的队列，用于验证先后顺序
var hrefArray = [
  "/taskType",
  "/basicConfig",
  "/sourceAndTargetConfig",
  "/taskConfig",
  "/processValidation",
  "/taskManage",
  '/dataSync'
];
router.beforeEach((to, from, next) => {
  sessionStorage.setItem("hrefArray", hrefArray);
  next();
});
export default router
