<template>
    <div>
        <h1 v-text="title"></h1>

        <form @submit.prevent="onSubmit">
            <input type="text" placeholder="CEP" v-model="cep">
            <button type="submit">Buscar</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SearchCepComponent",
        data () {
            return {
                title: 'Buscar CEP',
                cep: ''
            }
        },
        methods: {
            onSubmit () {
                alert(this.cep)
            }
        }
    }
</script>

<style scoped>

</style>