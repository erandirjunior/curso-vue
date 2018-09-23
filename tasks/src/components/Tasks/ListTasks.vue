<template>
    <div>
        <h2>{{ title }}</h2>

        <form action="" class="form form-inline" @submit.prevent="onSubmit">
            <input type="text" placeholder="Nome da Tarefa" class="form-control" v-model="task.name">
            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>

        <table class="table table-dark">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Nome</td>
                    <td width="190px">Ações</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <td>{{ task.id }}</td>
                    <td>{{ task.name }}</td>
                    <td>
                        <a href="#" @click.prevent="edit(index)" class="btn btn-info">Editar</a>
                        <a href="#" @click.prevent="remove(index)" class="btn btn-danger">Deletar</a>
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
                tasks: [],
                task: {
                   id: '',
                    name: ''
                },
                updating: false,
                indexTask: ''
            }
        },
        methods: {
            onSubmit () {
                this.updating ? this.update() : this.save();
            },
            save () {
                this.task.id = this.tasks.length + 1

                this.tasks.push(this.task)

                this.clearForm();
            },
            edit (index) {
                this.task = this.tasks[index]

                this.indexTask = index

                this.updating = true
            },
            update () {
                this.tasks[this.indexTask] = this.task

                this.updating = false

                this.clearForm()
            },
            clearForm () {
                this.task = {
                    id: '',
                    name: ''
                }
            },
            remove (index) {
                this.tasks.splice(index, 1)
            }
        }
    }
</script>

<style scoped>
    .btn {
        margin: 5px;
    }

    form {
        margin: 20px 0;
    }
</style>