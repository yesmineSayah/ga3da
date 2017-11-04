<template>
    <b-navbar toggleable="md">
        <b-navbar-brand href="#/">
            <img src="../../assets/beer.png">
            <img src="../../assets/9a3da.png">
        </b-navbar-brand>
        <b-nav-toggle target="nav_collapse"></b-nav-toggle>
        <b-collapse is-nav id="nav_collapse">
            <b-nav is-nav-bar class="ml-auto">
                <b-nav-item href="#/">Accueil</b-nav-item>
                <b-nav-item href="#/nights">9A3DETTE</b-nav-item>
            </b-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../main.scss';

.navbar {
    background-color: $navBack;
    opacity: 0.81;
    font-size: 18px;
}
</style>
