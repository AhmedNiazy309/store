import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5c3113e2 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _093323d2 = () => interopDefault(import('../pages/admin/post/add.vue' /* webpackChunkName: "pages/admin/post/add" */))
const _1fe83a44 = () => interopDefault(import('../pages/admin/post/_id/edit.vue' /* webpackChunkName: "pages/admin/post/_id/edit" */))
const _a5dc50aa = () => interopDefault(import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _a97326bc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _5c3113e2,
    name: "admin"
  }, {
    path: "/admin/post/add",
    component: _093323d2,
    name: "admin-post-add"
  }, {
    path: "/admin/post/:id?/edit",
    component: _1fe83a44,
    name: "admin-post-id-edit"
  }, {
    path: "/post/:id?",
    component: _a5dc50aa,
    name: "post-id"
  }, {
    path: "/",
    component: _a97326bc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
