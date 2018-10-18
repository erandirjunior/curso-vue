<template>
    <div>
        <h1 v-text="title"></h1>

        <form @submit.prevent="onSubmit">
            <input type="text" placeholder="CEP" v-model="cep">
            <button type="submit">Buscar</button>
        </form>
        
        <div v-if="preloader">
            <img src="../assets/preloader.gif" alt="Preloader">
        </div>

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
                address: {},
                preloader: false
            }
        },
        methods: {
            onSubmit () {
                this.preloader = true

                axios.get(`http://viacep.com.br/ws/${this.cep}/json/`)
                    .then(response => {
                        this.address = response.data
                        console.log(response)
                    })
                    .catch(error => console.log(error))
                    .finally(() => this.preloader = false)
            }
        }
    }
</script>

<style scoped>

</style>