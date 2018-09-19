<template>
    <div>
        <h2>{{ title }}</h2>
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
            }
        },
        methods: {
            callParent () {
                alert('callParent')

                /*indica uma chamada a um elemento pai*/
                this.$emit('calledParent')
            }
        }
    }
</script>

<style scoped>

</style>