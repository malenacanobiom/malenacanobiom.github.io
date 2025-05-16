<script>
        import 'bootstrap/dist/css/bootstrap.min.css'
    export default {
        name: "SliderApp",
        props: {
            titulo: String,
            texto: String,
            clase: String,
            imagen: String,
    }
    }
</script>

<template>
    <div :class="clase">
        <h2 class="subtitulo-chico">{{titulo}}:</h2>
        <div class="d-flex">
            <figure class="p-0"><img class="icono p-0" :src="imagen" alt="Icono"></figure>
            <p>{{ texto }}</p>
        </div>
    </div>
</template>

<style>
</style>

