<template>
    <div>
        <h2 v-text="title"></h2>
        <app-question></app-question>
    </div>
</template>

<script>
    import QuestionComponent from './QuestionComponent'
    export default {
        name: "QuizComponent",
        data () {
            return {
                title: 'Quiz'
            }
        },
        components: {
            'app-question': QuestionComponent
        }
    }
</script>

<style scoped>

</style>