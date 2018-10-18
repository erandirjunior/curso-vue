<template>
    <div>
        <h1 v-text="title"></h1>

        <form @submit.prevent="onSubmit">
            <input type="text" placeholder="CEP" v-model="cep">
            <button type="submit">Buscar</button>
        </form>

        <div v-show="address.cep">
            <p>CEP: {{ address.cep }}</p>
            <p>Logradouro: {{ address.logradouro }}</p>
            <p>bairro: {{ address.bairro }}</p>
            <p>localidade: {{ address.localidade }}</p>
            <p>UF: {{ address.uf }}</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "SearchCepComponent",
        data () {
            return {
                title: 'Buscar CEP',
                cep: '',
                address: {}
            }
        },
        methods: {
            onSubmit () {
                axios.get(`http://viacep.com.br/ws/${this.cep}/json/`)
                    .then(response => {
                        this.address = response.data
                        console.log(response)
                    })
                    .catch(error => console.log(error))
                    .finally(() => console.log('Finalizado'))
            }
        }
    }
</script>

<style scoped>

</style>