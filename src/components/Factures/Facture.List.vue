<template>
    <table class="table table-hover table-striped table-bordered">
        <thead>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="facture in factures" v-bind:key="facture._id">
                <td>{{facture.code}}</td>
                <td>{{facture.name}}</td>
                <td>{{facture.date | formatDate}}</td>
                <td>{{facture.status}}</td>
                <td>
                    <router-link :to="{ path:facture._id+ '/edit'}" append>
                        <button class="btn btn-info">Modifier</button>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: ['factures']

}
</script>

<style>

</style>
