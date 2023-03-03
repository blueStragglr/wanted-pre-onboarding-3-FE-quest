<script setup lang="ts">
</script>

<template>
  <template v-if="$route.path === '/login'">
    <router-view :key="$route.path" />
  </template>
  <template v-else>
    <div
      un-auto-cols="fr"
      un-gap-x="20px lt-md:10px"
      un-grid="~ cols-12 lt-md:cols-4 lt-xl:cols-8 rows-[64px_auto]"
      un-h="screen"
      un-w="screen"
    >
      <wanted-header un-col="span-full" />
      <wanted-sidebar un-col="span-2" />
      <router-view :key="$route.path" />
    </div>
  </template>
</template>

<style lang="scss" scoped>
</style>
