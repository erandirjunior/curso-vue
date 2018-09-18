<template>
    <div class="comp">
        <h1>{{ title }}</h1>
        <p>Teste</p>
        <span>Novo teste {{ msg }}</span>
        <form-component></form-component>
    </div>
</template>

<script>
    import FormComponent from './FormComponent'

    export default {
        data () {
            return {
                msg: 'Curso de Vue JS',
                title: 'Test Component'
            }
        },
        components: {
            FormComponent
        }
    }
</script>

<!--scoped é forma de definir que a estilização funcionará exclusivamente nesse componente-->
<style scoped>
p {
    color: red;
}

.comp {
    border: 1px solid green;
    margin: 5px;
    padding: 5px;
}
</style>