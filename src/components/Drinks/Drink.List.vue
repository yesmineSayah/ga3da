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
            <tr v-for="drink in drinks" v-bind:key="drink._id">
                <td>{{drink.code}}</td>
                <td>{{drink.name}}</td>
                <td>{{drink.date | formatDate}}</td>
                <td>{{drink.status}}</td>
                <td>
                    <router-link :to="{ path:drink._id+ '/edit'}" append>
                        <button class="btn btn-info">Modifier</button>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: ['drinks']

}
</script>

<style>

</style>
