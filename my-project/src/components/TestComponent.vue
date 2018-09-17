<template>
    <div>
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
                msg: 'Curso de Vue JS'
            }
        },
        components: {
            FormComponent
        }
    }
</script>

<!--scoped é forma de definir que a estilização funcionará exclusivamente nesse componente-->
<style scoped>
    p { color: red; }
</style>