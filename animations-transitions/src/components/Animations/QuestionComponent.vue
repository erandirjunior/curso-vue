<template>
    <div class="card">
        <div class="card-header">
            <h2 v-text="question"></h2>
        </div>

        <div class="card-body">
            <form @submit.prevent="checkResult" class="form form-inline">
                <input type="text" placeholder="Resposta:" v-model="reply" class="form-control">
                <button type="submit" class="btn btn-primary">Responder</button>
            </form>
        </div>
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
                let mode = this.result == this.reply ? 'answer-success' : 'answer-error'

                this.$emit('changeMode', mode)
            }
        }
    }
</script>

<style scoped>
    .default {
        border: 2px solid green;
        padding: 10px;
    }
</style>