<template>
  <div id="app">
    <header>
      <HeaderComponent></HeaderComponent>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <FooterComponent></FooterComponent>
    </footer>
  </div>
</template>

<script>
const HeaderComponent = () => import('./components/Shared/Header.Component.vue');
const FooterComponent = () => import('./components/Shared/Footer.Component.vue');
export default {
  name: 'app',
  created() {
    this.$store.dispatch('refresh');
  },
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
@import './main.scss';
body {
  background-color: $webBack;
}
</style>
