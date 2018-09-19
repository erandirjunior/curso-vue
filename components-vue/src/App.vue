<template>
    <div id="app">
      <tasks-component :items="['Lavar', 'Passar', 'Cozinhar']" :title="'Lista de Tarefas'"></tasks-component>
    </div>
</template>

<script>
import TasksComponent from './components/TasksComponent'

export default {
    name: 'app',
    components: {
        TasksComponent
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
