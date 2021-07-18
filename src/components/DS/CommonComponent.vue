<template>
  <div>
    <bread-crumb></bread-crumb>
    <slot name="body"></slot>
  </div>
</template>

<script>
const breadCrumb = () => import("./BreadCrumb");
const steps = () => import("./Steps");
export default {
  components: {
    breadCrumb,
    steps,
  },
};
</script>

<style scoped>
</style>