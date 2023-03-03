<script setup lang="ts">
</script>

<template>
  <template v-if="$route.path === '/login'">
    <router-view :key="$route.path" />
  </template>
  <template v-else>
    <div class="app">
      <router-view :key="$route.path" />
    </div>
  </template>
</template>

<style lang="scss" scoped>
</style>
