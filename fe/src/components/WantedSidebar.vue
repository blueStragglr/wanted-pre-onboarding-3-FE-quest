<script setup lang="ts">
const menuList = ref(['PageA', 'PageB', 'PageC'])
</script>

<template>
  <div
    un-border="~ r-[1px] r-solid r-gray-200"
    un-flex="~ col"
    un-gap-y="30px"
    un-h="calc(100% - 30px)"
    un-p="30px"
  >
    <router-link
      v-for="menu in menuList"
      :key="menu"
      :to="{ name: menu }"
      un-text="~ blue-500"
    >
      {{ menu }}
    </router-link>
  </div>
</template>

<style scoped>

</style>
