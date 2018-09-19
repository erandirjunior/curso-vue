<template>
    <div id="app">
        <tasks-component :items="['Lavar', 'Passar', 'Cozinhar']" :title="'Lista de Tarefas'"></tasks-component>
        <list-items-component :title="'Listagem de itens'" :items="[1, 2, 3, 4]"></list-items-component>
    </div>
</template>

<script>
import TasksComponent from './components/TasksComponent'
import ListItemsComponent from './components/ListItemsComponent'

export default {
    name: 'app',
    components: {
        TasksComponent,
        ListItemsComponent
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
