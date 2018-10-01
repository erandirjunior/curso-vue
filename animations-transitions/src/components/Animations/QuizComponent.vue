<template>
    <div>
        <h2 v-text="title"></h2>

        <!--<app-question @changeMode="changeMode"></app-question>-->
        <transition name="effect" mode="out-in">
            <component :is="mode" @changeMode="changeMode"></component>
        </transition>
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

    .effect-leave-active {
        animation: effect-out 2.5s;
    }

    .effect-enter-active {
        animation: effect-in 2.5s;
    }

    @keyframes effect-out {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(90deg);
        }
    }

    @keyframes effect-in {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }
</style>