<template>
    <div class="row text-center">
        <div class="container">
            <div class="col-12">
                <Carousel :perPage="1" :autoplay="true" :autoplayTimeout="4000" :paginationEnabled="false" :loop="true">
                    <Slide v-for="photo in night.photos" v-bind:key="photo.id">
                        <img class="img-fluid" v-bind:src="photo.path">
                    </Slide>
                </Carousel>
                <div class="col-12 up">
                    <div class="row">
                        <div class="col-12 col-md-12">
                            <h1>{{night.title}}</h1>
                            <h3>{{night.experience}}</h3>
                            <h4>
                                <strong>Kamia: </strong>{{night.kamia}}
                            </h4>
                            <div class="drinks-box">
                                <DrinksComponent :beer="24" :wine="2" :bottle="1"></DrinksComponent>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <PlaceComponent :place="night.place"></PlaceComponent>
                        </div>
                        <div class="col-12 col-md-6">
                            <UserComponent :user="night.owner"></UserComponent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const DrinksComponent = () => import('@/components/Shared/Drinks/Drinks.Component.vue');
const PlaceComponent = () => import('@/components/Shared/Places/Place.Card.Component.vue');
const UserComponent = () => import('@/components/Shared/Users/User.Card.Component.vue');
import { Carousel, Slide } from 'vue-carousel';
export default {
    computed: {
        night() {
            return this.$store.getters.getSelectedNight;
        }
    },
    created() {
        this.$store.dispatch('getNightById', this.$route.params.id);
    },
    components: {
        Carousel,
        Slide,
        DrinksComponent,
        PlaceComponent,
        UserComponent
    }
}
</script>

<style lang="scss" scoped>
@import '../../main.scss';
img {
    width: 100%;
    height: 100%;
}

.up {
    padding: $padding $padding $padding $padding;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 300px;
    left: 0px;
    @media screen and (max-width: 579px) {
        position: relative;
        top: 0px;
        left: 0px;
    }
}

.drinks-box {
    text-align: center;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
}
</style>
