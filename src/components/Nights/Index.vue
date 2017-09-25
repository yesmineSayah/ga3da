<template>
  <div class="col-12">
    <router-link :to="{path:'new'}" append>
      <button class="btn btn-success float-right but">Nouvelle Nights</button>
    </router-link>
    <NightList :nights="nights"></NightList>
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
    this.$store.dispatch("getAllNights").catch(err=>{
      this.$router.push({name:"login"});
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
