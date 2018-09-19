<template>
    <div>
        <h2>{{ title }}</h2>

        <input type="text" placeholder="Informe uma tarefa" v-model="task">
        <br>

        <button @click="callParent">Chamar Pai</button>

        <ul>
            <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        /*propriedade que indica quais componentes podem ser passados para esse componente*/
        props: ['items', 'title'],
        data () {
            return {
                task: ''
            }
        },
        methods: {
            callParent () {
                /*indica uma chamada a um evento pai, passando parametros*/
                this.$emit('calledParent', this.task)

                this.task = '';
            }
        }
    }
</script>

<style scoped>

</style>