import { defineStore } from 'pinia'

interface State {
  isAuthenticated: boolean
}

export const useAuthStore = defineStore({
  id: 'authStore',
  state: (): State => ({
    // ...
    isAuthenticated: false,
  }),
  getters: {
    // ...
  },
  actions: {
    // ...
    async login() {
      this.isAuthenticated = true
    },
    async logout() {
      this.isAuthenticated = false
    },
  },
})
