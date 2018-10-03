<template>
    <div>
        <h1 v-text="title"></h1>

        <form @submit.prevent="onSubmit">
            <input type="text" v-model="cep" placeholder="Informe o CEP">
            <button type="submit">Buscar</button>
        </form>

        <div v-show="address.bairro">
            <p><b>Bairro:</b> {{ address.bairro }}</p>
            <p><b>Logradouro:</b> {{ address.logradouro }}</p>
            <p><b>Cidade:</b> {{ address.cidade }}</p>
            <p><b>Estado:</b> {{ address.estado }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchCepComponent",
        data () {
            return {
                title: 'Buscar Cep',
                cep: '',
                address: {}
            }
        },
        methods: {
            onSubmit () {
                this.$http.get(`https://api.postmon.com.br/v1/cep/${this.cep}`).
                then(response => {
                    this.address = response.body
                }, error => console.log(error))
            }
        }
    }
</script>

<style scoped>

</style>