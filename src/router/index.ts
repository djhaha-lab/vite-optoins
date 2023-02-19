import { createRouter, createWebHistory } from 'vue-router'
// let Me = () => import('../components/Me.vue')
let HelloWorld = () => import('../components/HelloWorld.vue')
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', name: 'home', component: Me },
    {
      path: '/me',
      name: 'me',
      component: HelloWorld,
      //路由独享守卫
      beforeEnter: (to, from) => {
        // reject the navigation
        console.log('路由独享守卫')
        return true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log('全局前置守卫')
  next()
})
// 每次导航时都会触发，但是确保在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被正确调用
router.beforeResolve((to, from) => {
  console.log('全局解析守卫')
})
router.afterEach((to, from) => {
  console.log('全局后置钩子')
})
export default router
