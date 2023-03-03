<script setup lang="ts">
const router = useRouter()

const authStore = useAuthStore()
const { login } = authStore

const username = ref('')
const password = ref('')

const submit = async () => {
  try {
    await login()
    router.push('/')
  }
  catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div
    class="content-center grid justify-center"
    un-h="screen"
    un-w="screen"
  >
    <form
      class="grid"
      un-gap-y="15px"
      @submit.prevent="submit"
    >
      <div
        class="flex"
        un-gap-x="10px"
      >
        <label for="username">Username</label>
        <input
          v-model="username"
          id="username"
          type="text"
        >
      </div>
      <div
        class="flex"
        un-gap-x="10px"
      >
        <label for="password">Password</label>
        <input
          v-model="password"
          id="password"
          type="password"
        >
      </div>
      <div>
        <button type="submit">
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>

<route lang="yaml">
path: /login
name: Login
</route>
