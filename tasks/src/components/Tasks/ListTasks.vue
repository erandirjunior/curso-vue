<template>
    <div>
        <h2>{{ title }}</h2>

        <table class="table table-dark">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Nome</td>
                    <td width="180px">Ações</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <td>{{ task.id }}</td>
                    <td>{{ task.name }}</td>
                    <td>
                        <a href="" class="btn btn-info">Editar</a>
                        <a href="" class="btn btn-danger">Deletar</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ListTasks",
        data () {
            return {
                title: 'Lista de Tarefas',
                tasks: [
                    {id: 12, name: 'Teste'}
                ]
            }
        }
    }
</script>

<style scoped>
.btn {
    margin-right: 5px;
}
</style>