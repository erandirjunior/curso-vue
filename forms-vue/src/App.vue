<template>
    <div id="app">
        <forms-component></forms-component>
    </div>
</template>

<script>
import FormsComponent from './components/FormsComponent'

export default {
    name: 'app',
    components: {
        FormsComponent
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
