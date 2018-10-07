<template>
    <div>
        <h1>{{ title }}</h1>

        <form @submit.prevent="save">
            <div v-if="errorsValidation.name" class="alert alert-danger" role="alert">
                <p v-for="(error, index) in errorsValidation.name" :key="index">{{ error }}</p>
            </div>

            <div class="form-group">
                <input type="text" class="form-control" placeholder="Nome" v-model="product.name">
            </div>

            <div v-if="errorsValidation.description" class="alert alert-danger" role="alert">
                <p v-for="(error, index) in errorsValidation.description" :key="index">{{ error }}</p>
            </div>

            <div class="form-group">
                <input type="text" class="form-control" placeholder="Descrição" v-model="product.description">
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-primary">Editar</button>
            </div>
        </form>

        <preloader-component :preloader="preloader"></preloader-component>
    </div>
</template>

<script>
    import PreloaderComponent from '../general/PreloaderComponent'

    export default {
        name: "ProductEditComponent",
        components: {
            PreloaderComponent
        },
        props: {
            id: {
                required: true,
                default: ''
            }
        },
        data() {
            return {
                title: 'Editar Produto',
                product: {
                    name: '',
                    description: ''
                },
                errorsValidation: '',
                preloader: false
            }
        },
        created () {
            this.getData()
        },
        methods: {
            getData () {
                this.preloader = true

                this.$http.get(`http://127.0.0.1:8000/api/v1/products/${this.id}`)
                    .then(response => {
                        this.product = response.body
                    }, error => {
                        if (error.status == 404) {
                            alert('Produto não encontrado!')
                            this.$router.push('/product')
                        }
                    })
                    .finally(() => this.preloader = false)
            },
            save () {
                this.preloader = true

                this.$http.put(`http://127.0.0.1:8000/api/v1/products/${this.id}`, this.product)
                    .then(response => {
                        this.$router.push('/product')
                    }, error => {
                        if (error.status == 422) {
                            this.errorsValidation = error.body.errors
                        }
                        console.log(error)
                    })
                    .finally(() => this.preloader = false)
            }
        }
    }
</script>

<style scoped>

</style>