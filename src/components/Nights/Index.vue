<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1>9A3DETTE</h1>
      </div>
      <div class="col-12">
        <NightList :nights="nights"></NightList>
      </div>
    </div>
  </div>
</template>

<script>
const NightList = () => import('./Night.List.vue');
export default {
  computed: {
    nights() {
      return this.$store.getters.getAllNights;
    }
  },
  created() {
    this.$store.dispatch("getAllNights").catch(err => {
      this.$router.push({ name: "index" });
    });
  },
  components: {
    NightList
  }

}
</script>

<style scoped>
.but {
  margin-bottom: 50px;
}
</style>
