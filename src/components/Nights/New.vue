<template>
    <div>
        <NightForm :night="night" @submit="add" @back="back">
        </NightForm>
    </div>
</template>

<script>

const NightForm = () => import('./Night.Form.vue');
export default {
    data() {
        return {
            night: {

            }
        }
    },
    methods: {
        add: function() {
            this.$store.dispatch("insertNight", this.night).then((response) => {
                this.$router.go(-1);
            }).catch((error) => {
                console.log(error);
            });
        },
        back: function() {
            this.$router.go(-1);
        }
    }, components: {
        NightForm
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
