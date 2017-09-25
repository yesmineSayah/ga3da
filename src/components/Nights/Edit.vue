<template>
    <div>
        <Nightform :night="night" @submit="submit" @back="back" pwd=false>
        </Nightform>
        <button class="btn btn-danger" type="button" @click="remove"> supprimer </button>
    </div>
</template>

<script>

const Nightform = () => import('./Night.Form.vue');
export default {
    created: function() {
        this.$store.dispatch("getNightById", this.$route.params.idNight).catch(err => {
            this.$router.push({ name: "login" });
        });
    },
    computed: {
        night() {
            return this.$store.getters.getSelectedNight;
        }
    },
    components: {
        Nightform
    },
    methods: {
        submit() {
            this.$store.dispatch('editNight', this.night).then(f => {
                this.$router.go(-1);
            });
        },
        back() {
            this.$router.go(-1);
        },
        remove() {
            this.$store.dispatch('deleteNight', this.night._id).then(f => {
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
