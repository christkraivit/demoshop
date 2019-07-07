<template>
  <div class="contact">
    <div>
      <!-- Menu navbar Mobile -->
      <app-navbarmobile></app-navbarmobile>
      <!-- End Menu navbar Mobile -->
    </div>
  </div>
</template>

<script>
export default {
  components: {
    "app-navbarmobile": () => import("../components/navbarmobile")
  }
}
</script>
<style lang="scss" scoped>
</style>