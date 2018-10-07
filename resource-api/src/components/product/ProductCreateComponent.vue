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
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </div>
        </form>

        <preloader-component :preloader="preloader"></preloader-component>
    </div>
</template>

<script>
    import PreloaderComponent from '../general/PreloaderComponent'

    export default {
        name: "ProductCreateComponent",
        components: {
            PreloaderComponent
        },
        data() {
            return {
                title: 'Cadastrar Novo Produto',
                product: {
                    name: '',
                    description: ''
                },
                errorsValidation: '',
                preloader: false
            }
        },
        methods: {
        save () {
            this.preloader = true

            this.$http.post(`http://127.0.0.1:8000/api/v1/products`, this.product)
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