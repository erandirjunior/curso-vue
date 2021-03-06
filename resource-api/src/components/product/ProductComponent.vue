<template>
    <div>
        <h1>{{ title }}</h1>

        <div class="row">
            <div class="col">
                <router-link to="product/create" class="btn btn-info btn-create">Cadastrar Produto</router-link>
            </div>

            <div class="col">
                <product-search-component @search="search"></product-search-component>
            </div>
        </div>

        <div class="alert alert-danger text-center" v-if="confirmDelete">
            <h2>Deseja realmente deletar?</h2>
            <button class="btn btn-danger" @click.prevent="deleteProduct">Deletar Agora</button>
        </div>

        <p>Total: <span>{{ products.total }}</span></p>

        <table class="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>DESCRIÇÃO</th>
                    <th width="200px">AÇÃO</th>
                </tr>
            </thead>
            <tbody v-if="!preloader">
                <tr v-for="(product, index) in products.data" :key="index">
                    <th>{{ product.id }}</th>
                    <th>{{ product.name }}</th>
                    <th>{{ product.description }}</th>
                    <th>
                        <router-link :to="{name: 'product.edit', params: {id: product.id}}" class="btn btn-primary">Editar</router-link>
                        <a href="#" @click.prevent="confirmDeleteProduct(product.id)" class="btn btn-danger">Deletar</a>
                    </th>
                </tr>
            </tbody>
        </table>

        <preloader-component :preloader="preloader"></preloader-component>

        <pagination-component
                :pagination="products"
                :offset="offset"
        @paginate="load"></pagination-component>

        <!--<ul class="pagination">
            <li v-if="products.current_page - 1 >= 1" class="page-item">
                <a href="#" @click.prevent="pagination(products.current_page - 1)" class="page-link">Voltar</a>
            </li>
            <li v-if="products.current_page < products.last_page"  class="page-item">
                <a href="#" @click.prevent="pagination(products.current_page + 1)" class="page-link">Avançar</a>
            </li>
        </ul>-->
    </div>
</template>

<script>
    import PaginationComponent from '../general/PaginationComponent'
    import PreloaderComponent from '../general/PreloaderComponent'
    import ProductSearchComponent from './ProductSearchComponent'

    export default {
        name: "ProductComponent",
        components: {
            PaginationComponent,
            PreloaderComponent,
            ProductSearchComponent
        },
        data () {
            return {
                title: 'Lista de Produtos',
                products: {
                    current_page: 1,
                    last_page: 1
                },
                preloader: false,
                offset: 4,
                confirmDelete: false,
                id: 0,
                filter: ''
            }
        },
        created () {
            this.getProducts()
        },
        methods: {
            load (page) {
                this.products.current_page = page
                this.getProducts()
            },
            getProducts () {
                this.preloader = true

                this.$http.get(`http://127.0.0.1:8000/api/v1/products?page=${this.products.current_page}&filter=${this.filter}`)
                    .then(response => {
                        this.products = response.body
                    }, error => console.log(error))
                    .finally(() => this.preloader = false)
            },
            pagination (pageNumber) {
                this.products.current_page = pageNumber

                this.getProducts()
            },
            deleteProduct () {
                this.preloader = true

                this.$http.delete(`http://127.0.0.1:8000/api/v1/products/${this.id}`)
                    .then(response => {
                        this.getProducts()
                    }, error => console.log(error))
                    .finally(() => {
                        this.confirmDelete = false
                        this.preloader = false
                    })
            },
            confirmDeleteProduct (id) {
                this.confirmDelete = true
                this.id = id
            },
            search (filter) {
                this.filter = filter
                this.getProducts()
            }
        }
    }
</script>

<style scoped>
    .btn-danger {
        margin-left: 5px;
    }

    .btn-create {
        margin-bottom: 5px;
    }
</style>