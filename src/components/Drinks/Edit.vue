<template>
    <div>
        <Drinkform :drink="drink" @submit="submit" @back="back" pwd=false>
        </Drinkform>
        <button class="btn btn-danger" type="button" @click="remove"> supprimer </button>
    </div>
</template>

<script>

const Drinkform = () => import('./Drink.Form.vue');
export default {
    created: function() {
        this.$store.dispatch("getDrinkById", this.$route.params.idDrink).catch(err => {
            this.$router.push({ name: "login" });
        });
    },
    computed: {
        drink() {
            return this.$store.getters.getSelectedDrink;
        }
    },
    components: {
        Drinkform
    },
    methods: {
        submit() {
            this.$store.dispatch('editDrink', this.drink).then(f => {
                this.$router.go(-1);
            });
        },
        back() {
            this.$router.go(-1);
        },
        remove() {
            this.$store.dispatch('deleteDrink', this.drink._id).then(f => {
                this.$router.go(-1);
            });
        }
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
