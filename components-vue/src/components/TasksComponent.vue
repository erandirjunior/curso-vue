<template>
    <div>
        <h2>{{ title }}</h2>
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
        }
    }
</script>

<style scoped>

</style>