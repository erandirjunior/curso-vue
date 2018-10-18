<template>
    <div>
        <h1 v-text="title"></h1>

        <form @submit.prevent="onSubmit">
            <div :class="{'error': error}">
                <input type="text" placeholder="CEP" v-model="cep">
                <button type="submit">Buscar</button>

                <div v-if="error" v-text="error"></div>
            </div>
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
                preloader: false,
                error: ''
            }
        },
        methods: {
            onSubmit () {
                this.reset()

                axios.get(`http://viacep.com.br/ws/${this.cep}/json/`)
                    .then(response => {
                        if (response.data.erro) {
                            this.error = 'Cep Inválido'
                        } else {
                            this.address = response.data
                        }
                    })
                    .catch(error => {
                        this.error = '404'
                    })
                    .finally(() => this.preloader = false)
            },
            reset () {
                this.address = {}
                this.preloader = true
                this.error = false

            }
        }
    }
</script>

<style scoped>

    .error {
        color: red;
    }

    .error input {
        border: 1px solid red;
    }

</style>