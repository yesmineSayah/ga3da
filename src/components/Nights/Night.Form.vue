<template>
    <div class="row">
        <form class="container" v-on:submit.prevent="submit">
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label>Code
                            <span>*</span>
                        </label>
                        <input class="form-control" type="text" name="code" v-model="night.code" required>
                    </div>
                </div>

                <div class="col-6">
                    <div class="form-group">
                        <label>Name
                            <span>*</span>
                        </label>
                        <input class="form-control" type="text" name="name" v-model="night.name" required>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label>Date
                            <span>*</span>
                        </label>
                        <Datepicker input-class="form-control" name="date" v-model="night.date" :required="true">
                        </Datepicker>
                    </div>
                </div>

                <div class="col-6">
                    <div class="form-group">
                        <label>Status
                            <span>*</span>
                        </label>
                        <input class="form-control" type="text" name="status" v-model="night.status" required>
                    </div>
                </div>
            </div>

            </Datepicker>
            <div class="form-group">
                <button class="btn btn-primary" type="submit"> Valider </button>
                <button class="btn btn-secondary" type="button" @click="back"> Retour </button>
            </div>
        </form>
    </div>
</template>

<script>
const Datepicker = () => import('vuejs-datepicker');
export default {
    props: [
        "night"
    ],
    methods: {
        submit: function() {
            this.$emit("submit");
        },
        back: function() {
            this.$emit("back");
        },
    },
    components: {
        Datepicker
    }
}
</script>

<style scoped>
span {
    color: red;
}

h2 {
    font-family: "Vollkorn";
    font-size: 30px;
    text-align: left;
    margin-left: 100px;
}
</style>
