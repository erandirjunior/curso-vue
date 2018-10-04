<template>
    <div>
        <h1>{{ title }}</h1>

        <table class="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>DESCRIÇÃO</th>
                    <th width="200px">AÇÃO</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products.data" :key="index">
                    <th>{{ product.id }}</th>
                    <th>{{ product.name }}</th>
                    <th>{{ product.description }}</th>
                    <th>
                        <a href="#" class="btn btn-primary">Editar</a>
                        <a href="#" class="btn btn-danger">Deletar</a>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ProductComponent",
        data () {
            return {
                title: 'Lista de Produtos',
                products: {}
            }
        },
        created () {
            this.getProducts()
        },
        methods: {
            getProducts () {
                this.$http.get('http://127.0.0.1:8000/api/v1/products')
                    .then(response => {
                        this.products = response.body
                    }, error => console.log(error))
            }
        }
    }
</script>

<style scoped>
    .btn-danger {
        margin-left: 5px;
    }
</style>