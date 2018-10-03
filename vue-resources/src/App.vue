<template>
    <div id="app">
        <app-search-cep></app-search-cep>
    </div>
</template>

<script>
    import SearchCepComponent from './components/SearchCepComponent'

    export default {
        name: 'app',
        components: {
            'app-search-cep': SearchCepComponent
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
