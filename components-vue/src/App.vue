<template>
    <div id="app">
        <tasks-component @calledParent="answerChild" :items="tasks" :title="'Lista de Tarefas'"></tasks-component>
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
    },
    data () {
        return {
            tasks: ['Lavar', 'Passar', 'Cozinhar']
        }
    },
    methods: {
        answerChild (p1) {
            alert(`Adiconado nova tarefa ${p1}`)
            this.add(p1)
        },
        add (p1) {
            this.tasks.push(p1)
        }
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
