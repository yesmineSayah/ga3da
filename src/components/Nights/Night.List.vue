<template>
    <div class="row">
        <div class="col-12 col-md-4">
            <Card v-for="night in nights" v-bind:key="night.id" :night="night" @click="click" @profile="profile"></Card>
        </div>
    </div>
</template>

<script>
const Card = () => import('./Night.Card.Component.vue');
export default {
    props: ['nights'],
    components: {
        Card
    },
    methods: {
        click(night) {
            this.$router.push({
                path: "" + night.id,
                append: true
            });
        },
        profile(owner) {
            alert("hi i'm " + owner.first_name + " " + owner.last_name)
        }
    }
}
</script>

<style>

</style>
