<template>
    <div>
        <h1>{{ title }}</h1>

        <form @submit.prevent="save">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Nome" v-model="product.name">
            </div>

            <div class="form-group">
                <input type="text" class="form-control" placeholder="Descrição" v-model="product.description">
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "ProductCreateComponent",
        data() {
            return {
                title: 'Cadastrar Novo Produto',
                product: {
                    name: '',
                    description: ''
                }
            }
        },
        methods: {
        save () {
            this.$http.post(`http://127.0.0.1:8000/api/v1/products`, this.product)
                    .then(response => {
                        //console.log(response)
                        this.$router.push('/product')
                    }, error => {
                        console.log(error)
                    })
                    .finally(() => console.log('Finalizou!!!'))
            }
        }
    }
</script>

<style scoped>

</style>