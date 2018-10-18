<template>
    <div>
        <h1 v-text="title"></h1>

        <task-add-component></task-add-component>

        <ul>
            <li v-for="(task, index) in getTasks" :key="index" :class="{'completed': task.completed}">
                <a href="#" @click.prevent="completedTask(task)">Toggle</a>
                {{ task.name }}
            </li>
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
                return this.$store.state.Tasks.tasks
            },
            getTaskSorted () {
                return this.$store.getters.sortedTasks
            }
        },
        methods: {
            completedTask (task) {
                this.$store.commit('TOGGLE_TASK', task)
            }
        },
        components: {
            TaskAddComponent
        }
    }
</script>

<style scoped>
    .completed {
        background: green;
    }
</style>