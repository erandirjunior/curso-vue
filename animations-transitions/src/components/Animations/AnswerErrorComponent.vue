<template>
    <div class="alert alert-danger">
        <h1>{{ title }}</h1>
        <p>Erro na resposta</p>

        <button @click="nextQuestion" class="btn btn-danger">Próxima Pergunta</button>
    </div>
</template>

<script>
    export default {
        name: "AnswerSuccessComponent",
        data () {
            return {
                title: 'Erro!!'
            }
        },
        methods: {
            nextQuestion () {
                this.$emit('changeMode')
            }
        }
    }
</script>

<style scoped>
</style>