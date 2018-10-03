<template>
    <div>
        <h1 v-text="title"></h1>

        <form @submit.prevent="onSubmit">
            <input type="text" v-model="cep" placeholder="Informe o CEP">
            <button type="submit">Buscar</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SearchCepComponent",
        data () {
            return {
                title: 'Buscar Cep',
                cep: ''
            }
        },
        methods: {
            onSubmit () {
                this.$http.get(`https://api.postmon.com.br/v1/cep/${this.cep}`).
                then(response => {
                    console.log(response.body)
                }, error => console.log(error))
            }
        }
    }
</script>

<style scoped>

</style>