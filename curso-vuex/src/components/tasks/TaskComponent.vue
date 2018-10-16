<template>
    <div>
        <h1 v-text="title"></h1>

        <task-add-component></task-add-component>

        <ul>
            <li v-for="(task, index) in getTasks" :key="index">{{ task.name }}</li>
        </ul>
    </div>
</template>

<script>
    import TaskAddComponent from './TaskAddComponent'

    export default {
        name: "TaskComponent",
        data () {
            return {
                title: 'Lista de Tarefas'
            }
        },
        computed: {
            getTasks () {
                return this.$store.state.tasks
            }
        },
        components: {
            TaskAddComponent
        }
    }
</script>

<style scoped>

</style>