<template>
  <div class="col-12">
    <router-link :to="{path:'new'}" append>
      <button class="btn btn-success float-right but">Nouvelle Drinks</button>
    </router-link>
    <DrinkList :drinks="drinks"></DrinkList>
  </div>
</template>

<script>
const DrinkList = () => import('./Drink.List.vue');
export default {
  computed: {
    drinks() {
      return this.$store.getters.getAllDrinks;
    }
  },
  created() {
    this.$store.dispatch("getAllDrinks").catch(err=>{
      this.$router.push({name:"login"});
    });
  },
  components: {
    DrinkList
  }

}
</script>

<style scoped>
.but {
  margin-bottom: 50px;
}
</style>
