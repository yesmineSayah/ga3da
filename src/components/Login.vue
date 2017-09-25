<template>
    <div>
        <p v-bind:class="color">
            <strong>{{msg}}</strong>
        </p>
        <form class="container" v-on:submit.prevent="login()">

            <div class="form-group">
                <div class="form-group">
                    <label>
                        <strong>Login</strong>
                    </label>
                    <input class="form-control" type="text" name="username" v-model="user.username" required>
                </div>
                <div class="form-group">
                    <label>
                        <strong>Mot de Passe</strong>
                    </label>
                    <input class="form-control" type="password" name="password" v-model="user.password" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" type="submit" :disabled="!interact"> Connexion </button>

                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {

            },
            interact: true,
            msg: "",
            color: "black"
        }
    },
    methods: {
        login() {
            this.$store.dispatch("login", this.user).then((user) => {
                this.$router.push({
                    name:"factures"
                });
            }).catch((error) => {
                if (error.response.status === 401 || error.response.status === 400) {
                    this.msg = "Mot de passe invalide";
                    this.color = "red";
                } else {
                    console.log(error)
                    this.msg = "Une erreur s'est produite, Veuillez Résaayez";
                    this.color = "red";
                }
            })
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
