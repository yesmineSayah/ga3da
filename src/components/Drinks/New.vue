<template>
    <div>
        <DrinkForm :drink="drink" @submit="add" @back="back">
        </DrinkForm>
    </div>
</template>

<script>

const DrinkForm = () => import('./Drink.Form.vue');
export default {
    data() {
        return {
            drink: {

            }
        }
    },
    methods: {
        add: function() {
            this.$store.dispatch("insertDrink", this.drink).then((response) => {
                this.$router.go(-1);
            }).catch((error) => {
                console.log(error);
            });
        },
        back: function() {
            this.$router.go(-1);
        }
    }, components: {
        DrinkForm
    }
}
</script>

<style scoped>
.black {
    color: black;
}

.red {
    color: red;
}
</style>
