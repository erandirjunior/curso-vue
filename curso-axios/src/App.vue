<template>
    <div id="app">
        <search-cep-component></search-cep-component>
    </div>
</template>

<script>
    import SearchCepComponent from './components/SearchCepComponent'

    export default {
        name: 'app',
        components: {
            SearchCepComponent
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
