<!-- TextoInfoApp.vue -->
<template>
    <div>
      <p class="div-texto-pill">{{ props.texto }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  const props = defineProps(['texto']);
  </script>