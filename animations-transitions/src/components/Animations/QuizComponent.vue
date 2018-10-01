<template>
    <div>
        <h2 v-text="title"></h2>

        <!--<app-question @changeMode="changeMode"></app-question>-->
        <component :is="mode" @changeMode="changeMode"></component>
    </div>
</template>

<script>
    import QuestionComponent from './QuestionComponent'
    import AnswerSuccessComponent from './AnswerSuccessComponent'
    import AnswerErrorComponent from './AnswerErrorComponent'

    export default {
        name: "QuizComponent",
        data () {
            return {
                title: 'Quiz',
                mode: 'app-question'
            }
        },
        components: {
            'app-question': QuestionComponent,
            'answer-success': AnswerSuccessComponent,
            'answer-error': AnswerErrorComponent
        },
        methods: {
            changeMode (mode) {
                this.mode = mode === undefined ? this.mode = 'app-question' : mode
            }
        }
    }
</script>

<style scoped>

</style>