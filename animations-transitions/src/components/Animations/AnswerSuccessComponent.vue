<template>
    <div class="alert alert-success">
        <h1>{{ title }}</h1>
        <p>Sucesso na resposta</p>

        <button @click="nextQuestion" class="btn btn-success">Próxima Pergunta</button>
    </div>
</template>

<script>
    export default {
        name: "AnswerSuccessComponent",
        data () {
            return {
                title: 'Sucesso!!'
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