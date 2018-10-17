<template>
    <div id="app">
        <router-link to="/">Home</router-link>
        <router-link to="/tasks">Tarefas ({{ totalTasks }} / {{ totalTasksNotCompleted }})</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {},
        computed: {
            totalTasksNotCompleted () {
                return this.$store.getters.tasksNotCompleted.length
            },
            totalTasks () {
                return this.$store.getters.sortedTasks.length
            }
        }
    }
</script>

<style>
</style>
