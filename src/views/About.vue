<template>
  <div class="about">
    <div class="container bb">
      <!-- Menu navbar Mobile -->
      <app-navbarmobile></app-navbarmobile>
      <!-- End Menu navbar Mobile -->
      <!-- Footer -->
      <app-footer></app-footer>
      <!-- End Footer -->
    </div>
  </div>
</template>

<script>
export default {
  components: {
    "app-navbarmobile": () => import("../components/navbarmobile"),
    "app-footer": () => import("../components/Footer")
  }
};
</script>
<style lang="scss" scoped>
.bb {
  background: #8f285fa8;
}

div.linecolor {
  height: 7px;
  background: #ffc107;
  margin: 10px 2px;
}
</style>