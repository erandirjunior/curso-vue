<template>
    <div>
        <h2 v-text="question"></h2>

        <form @submit.prevent="checkResult">
            <input type="text" placeholder="Resposta:" v-model="reply">
            <button type="submit">Responder</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Question",
        data () {
            return {
                question: 'Gerando Pergunta...',
                result: 0,
                reply: ''
            }
        },
        created () {
            this.generateQuestion()
        },
        methods: {
            generateQuestion () {
                let numberOne = this.generateRandomNumber(1, 100)
                let numberTwo = this.generateRandomNumber(1, 100)

                this.result = numberOne + numberTwo

                this.question = `Qual é o resultado da soma entre ${numberOne} + ${numberTwo} ?`;
            },
            generateRandomNumber (min, max) {
                return Math.round(Math.random() * (max - min)) + min
            },
            checkResult () {
                let msg = this.result == this.reply ? 'Acertou!' : 'Errou!'

                alert(msg)
                this.$emit('changeMode')
            }
        }
    }
</script>

<style scoped>

</style>