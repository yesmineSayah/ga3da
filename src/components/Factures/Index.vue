<template>
  <div class="col-12">
    <router-link :to="{path:'new'}" append>
      <button class="btn btn-success float-right but">Nouvelle Factures</button>
    </router-link>
    <FactureList :factures="factures"></FactureList>
  </div>
</template>

<script>
const FactureList = () => import('./Facture.List.vue');
export default {
  computed: {
    factures() {
      return this.$store.getters.getAllFactures;
    }
  },
  created() {
    this.$store.dispatch("getAllFactures").catch(err=>{
      this.$router.push({name:"login"});
    });
  },
  components: {
    FactureList
  }

}
</script>

<style scoped>
.but {
  margin-bottom: 50px;
}
</style>
