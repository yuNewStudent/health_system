import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Home = () => import('@/views/Home')
const OperationalLog = () => import('@/views/OperationalLog/OperationalLog')
const DataShow = () => import('@/views/DataShow/DataShow')
const CustomerManage = () => import('@/views/CustomerManage/CustomerManage')
const StatisticalSummary = () => import('@/views/StatisticalSummary/StatisticalSummary')
const VisitGuide = () => import('@/views/VisitGuide/VisitGuide')
const HostoryQuery = () => import('@/views/HostoryQuery/HostoryQuery')
const UserManage = () => import('@/views/UserManage/UserManage')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/operationallog',
          name: 'OperationalLog',
          component: OperationalLog
        },
        {
          path: '/datashow',
          name: 'DataShow',
          component: DataShow
        },
        {
          path: '/customermanage',
          name: 'CustomerManage',
          component: CustomerManage
        },
        {
          path: '/statisticalsummary',
          name: 'StatisticalSummary',
          component: StatisticalSummary
        },
        {
          path: '/visitguide',
          name: 'VisitGuide',
          component: VisitGuide
        },
        {
          path: '/hostoryquery',
          name: 'HostoryQuery',
          component: HostoryQuery
        },
        {
          path: '/usermanage',
          name: 'UserManage',
          component: UserManage
        }
      ]
    }
  ]
})
