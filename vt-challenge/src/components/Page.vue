<template lang="">
  <main class="page">
    <h1>This is Page {{ title }}!</h1>
  </main>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    title: String,
  },
})
export default class Page extends Vue {
  title!: string;
}
</script>
<style lang="scss" scoped></style>
