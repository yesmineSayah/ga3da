<template>
    <div>
        <Factureform :facture="facture" @submit="submit" @back="back" pwd=false>
        </Factureform>
        <button class="btn btn-danger" type="button" @click="remove"> supprimer </button>
    </div>
</template>

<script>

const Factureform = () => import('./Facture.Form.vue');
export default {
    created: function() {
        this.$store.dispatch("getFactureById", this.$route.params.idFacture).catch(err => {
            this.$router.push({ name: "login" });
        });
    },
    computed: {
        facture() {
            return this.$store.getters.getSelectedFacture;
        }
    },
    components: {
        Factureform
    },
    methods: {
        submit() {
            this.$store.dispatch('editFacture', this.facture).then(f => {
                this.$router.go(-1);
            });
        },
        back() {
            this.$router.go(-1);
        },
        remove() {
            this.$store.dispatch('deleteFacture', this.facture._id).then(f => {
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
