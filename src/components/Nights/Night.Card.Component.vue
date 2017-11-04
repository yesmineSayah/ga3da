<template>
    <div class="row cc">
        <div class="col-12" @click="click(night)">
            <img class="img-fluid" v-if="night.photos && night.photos[0] && night.photos[0].path" v-bind:src="night.photos[0].path">
            <img v-else class="img-fluid" src="../../assets/noimg.gif">
        </div>
        <div class="col-12 ">
            <div class="row padding">
                <div class="col-12" @click="click(night)">
                    <h3>{{night.title}}</h3>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-3 col-md-12 col-lg-3" @click="profile(night.owner)">
                            <img class="img-fluid avatar" v-if="night.owner && night.owner.avatar" :src="night.owner.avatar">
                            <img v-else class="img-fluid avatar" src="../../assets/noimg.gif">
                        </div>
                        <div class="col-9 col-md-12 col-lg-9 box" @click="click(night)">
                            <p>
                                {{night.experience}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12" @click="click(night)">
                    <p>
                        <strong>Kamia:</strong> {{night.kamia}}</p>
                </div>
                <div class="col-12" @click="click(night)">
                    <div class="row padding">
                        <div class="col-9">
                            <DrinksComponent :beer="24" :wine="2" :bottle="1"></DrinksComponent>
                        </div>
                        <div class="col-3">
                            <RatingComponent :likes="night.likes_count" :dislikes="night.dislikes_count"></RatingComponent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const DrinksComponent = () => import('@/components/Shared/Drinks/Drinks.Component.vue');
const RatingComponent = () => import('@/components/Shared/Drinks/Rating.Component.vue');
export default {
    props: ['night'],
    methods: {
        click(night) {
            this.$emit("click", night);
        },
        profile(owner) {
            this.$emit("profile", owner);
        }
    },
    components: {
        DrinksComponent, RatingComponent
    }
}
</script>

<style lang="scss" scoped>
@import '../../main.scss';

$padding:8px;

.img-fluid {
    height: auto;
    border-radius: 10px;
    border: 1px solid $cardBorder;
}

.avatar {
    border-radius: 50%;
}

.avatar:hover {
    transform: scale(1.2);
    transition: transform 200ms;
}

.cc {
    padding-top: $padding;
    background-color: $card;
    border-radius: 5px;
    border: 1px solid $cardBorder;
}

.cc:hover {
    transform: scale(1.05);
    transition: transform 200ms;
}

p {
    padding: $padding $padding $padding $padding;
}



.padding {
    padding: $padding $padding $padding $padding;
}

.box {

    background-color: $cardSecondary;
    border-radius: 10px;

    border: 1px solid $cardBorder;
}
</style>
