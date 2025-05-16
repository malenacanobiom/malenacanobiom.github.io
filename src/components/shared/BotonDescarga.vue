<template>
  <RouterLink :class="[props.clase, 'boton-descarga']" to="/app">{{ props.texto }}</RouterLink>
</template>

<script setup>

    import { RouterLink } from 'vue-router'
    import { defineProps } from 'vue';

    import 'bootstrap/dist/css/bootstrap.min.css'

    const props = defineProps({
        clase: String,
        texto: String
    });
    
</script>

<style scoped>
.boton-descarga{ 
    border: solid 2px var(--Negro);
    background-color: transparent;
    text-transform: uppercase !important;
    border-radius: 0 50px 50px 0;
    transition: border-width 0.5s;
    font-weight: 600;
    color: var(--Negro, #404040);
    text-align: center;
    font-family: Ubuntu;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    min-width: max-content!important;
    text-decoration: none;
}
</style>