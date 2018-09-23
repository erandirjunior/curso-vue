<template>
    <div>
        <h2>{{ title }}</h2>

        <div class="row">
            <div class="col">
                <form action="" class="form form-inline" @submit.prevent="onSubmit">
                    <input type="search" placeholder="Pesquisar..." class="form-control" v-model="filter">
                </form>
            </div>

            <div class="col">
                <form action="" class="form form-inline" @submit.prevent="onSubmit">
                    <input type="text" placeholder="Nome da Tarefa" class="form-control" v-model="task.name">
                    <button type="submit" class="btn btn-primary">Cadastrar</button>
                </form>
            </div>
        </div>

        <table class="table table-dark">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Nome</td>
                    <td width="190px">Ações</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in filteredItems" :key="index">
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
                indexTask: '',
                filter: ''
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
        },
        computed: {
            filteredItems () {
                if (this.filter === '') {
                    return this.tasks
                }

                return this.tasks.filter(task => task.name.toLowerCase().indexOf(this.filter.toLowerCase()) > -1)

                /*return this.tasks.filter(task => task['name'].includes(this.filter))*/
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