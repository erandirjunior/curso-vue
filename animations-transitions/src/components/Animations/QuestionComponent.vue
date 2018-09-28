<template>
    <div>
        <h2 v-text="question"></h2>
    </div>
</template>

<script>
    export default {
        name: "Question",
        data () {
            return {
                question: 'Gerando Pergunta...'
            }
        }
    }
</script>

<style scoped>

</style>