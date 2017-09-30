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
            <tr v-for="night in nights" v-bind:key="night.id">
                <td>{{night.code}}</td>
                <td>{{night.name}}</td>
                <td>{{night.date | formatDate}}</td>
                <td>{{night.status}}</td>
                <td>
                    <router-link :to="{ path:night.id+ '/edit'}" append>
                        <button class="btn btn-info">Modifier</button>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: ['nights']
}
</script>

<style>

</style>
