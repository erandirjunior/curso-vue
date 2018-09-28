<template>
    <div>
        <h2 v-text="title"></h2>

        <!--<app-question @changeMode="changeMode"></app-question>-->
        <component :is="mode" @changeMode="changeMode"></component>
    </div>
</template>

<script>
    import QuestionComponent from './QuestionComponent'
    export default {
        name: "QuizComponent",
        data () {
            return {
                title: 'Quiz',
                mode: 'app-question'
            }
        },
        components: {
            'app-question': QuestionComponent
        },
        methods: {
            changeMode () {
                alert('Uhuuu!')
            }
        }
    }
</script>

<style scoped>

</style>