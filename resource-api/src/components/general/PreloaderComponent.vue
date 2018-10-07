<template>
    <div v-if="preloader">
        <img src="../../assets/preloader.gif" alt="Carregando" class="preloader">
    </div>
</template>

<script>
    export default {
        name: "PreloaderComponent",
        props: {
            preloader: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    }
</script>

<style scoped>
    .preloader {
        max-width: 60px;
    }
</style>