<template>
    <div>
        <form @submit.prevent="onSubmit">
            <input type="text" placeholder="Adicionar Nova Tarefa" v-model="task.name">
            <button type="submit">Adicionar</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "TaskAddComponent",
        data () {
            return {
                task: {
                    name: '',
                    completed: false
                }
            }
        },
        methods: {
            onSubmit () {
                this.$store.commit('ADD_TASK', this.task)

                this.task = {
                    name: '',
                    completed: false
                }
            }
        }

    }
</script>

<style scoped>

</style>