<template>
    <div class="comp">
        <h1>{{ title }}</h1>
        #form component
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: 'Form Component'
            }
        }
    }
</script>

<style scoped>
.comp {
    border: 1px solid yellow;
    margin: 5px;
    padding: 5px;
}
</style>