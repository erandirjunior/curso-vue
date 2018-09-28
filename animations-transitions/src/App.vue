<template>
    <div id="app">
        <app-quiz></app-quiz>
        <hr>

        <button @click.prevent="show = !show">Mostrar</button>
        <transition name="teste">
            <div v-if="show">Mostrando...</div>
        </transition>
    </div>
</template>

<script>
    import QuizComponent from './components/Animations/QuizComponent'

    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome',
                show: false
            }
        },
        components: {
            'app-quiz': QuizComponent
        }
    }
</script>

<style>
    .teste-leave-active {
        transition: opacity 1.5s;
    }
    .teste-enter-active {
        transition: opacity 1.5s;
    }

    .teste-enter, .teste-leave-to {
        opacity: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
