import { createApp, markRaw } from 'vue'

// Pinia
import { createPinia } from 'pinia'

// Router
import autoRoutes from 'virtual:generated-pages'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouterScrollBehavior } from 'vue-router'

import App from './App.vue'

// UnoCSS
import 'virtual:uno.css'
import 'virtual:unocss-devtools'

const app = createApp(App)

// Router
const routes = autoRoutes.map((route) => {
  return {
    ...route,
    alias: route.path.endsWith('/') ? `${route.path}index` : route.path,
  }
})

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition)
    return savedPosition

  else
    return { top: 0 }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
})

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = storeToRefs(useAuthStore())
  if (to.meta.requireAuth && !isAuthenticated.value)
    next({ name: 'Login' })
  else
    next()
})

app.use(router)

// Pinia
const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
app.use(pinia)

// Mount
app.mount('#app')
