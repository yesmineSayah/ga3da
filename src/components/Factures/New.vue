<template>
    <div>
        <FactureForm :facture="facture" @submit="add" @back="back">
        </FactureForm>
    </div>
</template>

<script>

const FactureForm = () => import('./Facture.Form.vue');
export default {
    data() {
        return {
            facture: {

            }
        }
    },
    methods: {
        add: function() {
            this.$store.dispatch("insertFacture", this.facture).then((response) => {
                this.$router.go(-1);
            }).catch((error) => {
                console.log(error);
            });
        },
        back: function() {
            this.$router.go(-1);
        }
    }, components: {
        FactureForm
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
