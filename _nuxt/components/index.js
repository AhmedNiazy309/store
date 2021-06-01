export { default as PostCard } from '../../components/post-card.vue'
export { default as PostForm } from '../../components/admin/post-form.vue'
export { default as AppFooter } from '../../components/core/app-footer.vue'
export { default as AppHeader } from '../../components/core/app-header.vue'
export { default as AppModal } from '../../components/shared/app-modal.vue'

export const LazyPostCard = import('../../components/post-card.vue' /* webpackChunkName: "components/post-card" */).then(c => c.default || c)
export const LazyPostForm = import('../../components/admin/post-form.vue' /* webpackChunkName: "components/admin/post-form" */).then(c => c.default || c)
export const LazyAppFooter = import('../../components/core/app-footer.vue' /* webpackChunkName: "components/core/app-footer" */).then(c => c.default || c)
export const LazyAppHeader = import('../../components/core/app-header.vue' /* webpackChunkName: "components/core/app-header" */).then(c => c.default || c)
export const LazyAppModal = import('../../components/shared/app-modal.vue' /* webpackChunkName: "components/shared/app-modal" */).then(c => c.default || c)
