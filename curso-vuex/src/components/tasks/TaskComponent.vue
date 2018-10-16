<template>
    <div>
        <h1 v-text="title"></h1>
    </div>
</template>

<script>
    export default {
        name: "TaskComponent",
        data () {
            return {
                title: 'Lista de Tarefas'
            }
        }
    }
</script>

<style scoped>

</style>