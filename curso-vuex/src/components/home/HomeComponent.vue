<template>
    <div>
        <h1 v-text="title"></h1>
    </div>
</template>

<script>
    export default {
        name: "HomeComponent",
        data () {
            return {
                title: 'Home Page'
            }
        }
    }
</script>

<style scoped>

</style>