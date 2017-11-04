<template>
    <div v-if="place" class="row cc" @click="click(place)">
        <div class="col-12">
            <Carousel v-if="place.photos && place.photos[0] && place.photos[0].path" :perPage="1" :autoplay="true" :autoplayTimeout="4000" :paginationEnabled="false" :loop="true">
                <Slide v-for="photo in place.photos" v-bind:key="photo.id">
                    <img class="img-fluid" v-bind:src="photo.path">
                </Slide>
            </Carousel>
            <img v-else class="img-fluid" src="../../../assets/noimg.gif">
        </div>
        <div class="col-12 ">
            <div class="row padding">
                <div class="col-12">
                    <h3>{{place.name}}</h3>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <p>
                                {{place.adresse}}
                            </p>
                        </div>
                        <div class="col-12 col-md-4">
                            <p>
                                {{place.localite}}
                            </p>
                        </div>
                        <div class="col-12 col-md-4">
                            <p>
                                {{place.gouvernorat}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    props: ['place'],
    methods: {
        click(place) {
            this.$emit("click", place);
        }
    },
    components: {
        Carousel,
        Slide
    }
}
</script>

<style lang="scss" scoped>
@import '../../../main.scss';

$padding:8px;

.img-fluid {
    height: auto;
    border-radius: 10px;
    border: 1px solid $cardBorder;
}

.cc {
    padding-top: $padding;
}
</style>
