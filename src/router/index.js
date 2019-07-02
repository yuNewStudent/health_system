import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Home = () => import('@/views/Home')
const OperationalLog = () => import('@/views/OperationalLog/OperationalLog')
const DataShow = () => import('@/views/DataShow/DataShow')
const CustomerManage = () => import('@/views/CustomerManage/CustomerManage')
const Customer = () => import('@/views/CustomerManage/index')
const ServiceCenter = () => import('@/views/CustomerManage/ServiceCenter')
const StatisticalSummary = () => import('@/views/StatisticalSummary/StatisticalSummary')
const VisitGuide = () => import('@/views/VisitGuide/VisitGuide')
const LateVisit = () => import('@/views/LateVisit/LateVisit')
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
          path: '/customer',
          name: 'Customer',
          component: Customer,
          redirect: '/customermanage/index',
          children: [
            {
              path: '/customermanage/index',
              name: 'CustomerManage',
              component: CustomerManage
            },
            {
              path: '/customermanage/servicecenter',
              name: 'ServiceCenter',
              component: ServiceCenter
            }
          ]
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
          path: '/latevisit',
          name: 'LateVisit',
          component: LateVisit
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
