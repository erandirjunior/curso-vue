<template>
    <div id="app">
        <router-link to="/">Home</router-link>
        <router-link to="/tasks">Tarefas</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {}
    }
</script>

<style>
</style>
