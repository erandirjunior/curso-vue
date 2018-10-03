<template>
    <div>
        <h1 v-text="title"></h1>

        <form @submit.prevent="onSubmit">
            <input type="text" v-model="cep" placeholder="Informe o CEP">
            <button type="submit">Buscar</button>
        </form>

        <br/>

        <div v-if="msgError">
            {{ msgError }}
        </div>

        <div v-if="preloader">
            <img src="../assets/preloader.gif" alt="Carregando..">
        </div>

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
                address: {},
                preloader: false,
                msgError: ''
            }
        },
        methods: {
            onSubmit () {
                this.reset()

                this.$http.get(`https://api.postmon.com.br/v1/cep/${this.cep}`).
                then(response => {
                    this.address = response.body
                }, error => {
                    console.log(error)
                    this.msgError = 'CEP não Encontrado'
                }).finally(() => this.preloader = false)
            },
            reset () {
                this.address = {}
                this.preloader = true
                this.msgError = ''
            }
        }
    }
</script>

<style scoped>

</style>