<!-- CardTestimonios.vue -->
<template>
    <div class="col-3 mt-3 card-testimonio">
      <figure class="col-8 offset-2">
        <img class="rounded-circle" :src="'assets/img/retrato-' + (props.index + 1) + '.jpg'" :alt="'retrato' + (props.index + 1)">
      </figure>
      <h3 class="subtitulo-grande text-center">{{ props.nombre }}</h3>
      <div class="border-verde"></div>
      <p>{{ props.texto }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  const props = defineProps(['texto', 'index', 'nombre']);
  </script>