<template>
    <div class="success">
        <h1>{{ title }}</h1>
        <p>Sucesso na resposta</p>

        <button @click="nextQuestion">Próxima Pergunta</button>
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
    .success {
        border: 2px solid blue;
        padding: 10px;
    }
</style>