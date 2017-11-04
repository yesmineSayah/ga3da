<template>
    <div v-if="user" class="row cc" @click="click(user)">
        <div class="col-3">
            <img class="img-fluid" v-if="user.avatar" v-bind:src="user.avatar">
            <img v-else class="img-fluid" src="../../../assets/noimg.gif">
        </div>
        <div class="col-9">
            <div class="row padding">
                <div class="col-12">
                    <p>{{user.first_name}} {{user.last_name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['user'],
    methods: {
        click(user) {
            this.$emit("click", user);
        }
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
