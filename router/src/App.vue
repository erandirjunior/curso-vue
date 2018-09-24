<template>
    <div id="app">
        <router-link to="/">Home</router-link>
        <router-link :to="{name: 'produtos'}">Products</router-link>
        <router-link to="/tasks">Tasks</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app'
    }
</script>

<style>

</style>
