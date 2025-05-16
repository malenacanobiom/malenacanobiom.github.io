<template>
    <section>
      <div class="container border-btn">
        <h2 class="offset-3 titulo-chico col-6 py-4 px-5 text-center titulo-border">Nuestros Aventureros</h2>
        <div class="row justify-content-around pt-5 px-5">
          <CardTestimonios v-for="(testimonio, index) in testimonios" :key="index" :texto="testimonio.texto" :nombre="testimonio.nombre" :index="index" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import CardTestimonios from './CardTestimonios.vue';
  
  const testimonios = ref([
    {
      nombre: 'Sergio Rodriguez',
      texto: 'ExplorAR hizo que el senderismo sea aún más emocionante. Las rutas detalladas y las medallas son una adicción. ¡Nunca más saldré de casa sin esta app!',
    },
    {
      nombre: 'Marta Fernandez',
      texto: 'ExplorAR hace que encontrar rutas sea pan comido. Mis amigos y yo compartimos nuestras aventuras en WhatsApp. ¡Es genial!',
    },
    {
      nombre: 'Cristina Perez',
      texto: 'Para mí, ExplorAR es mi guía de confianza en la montaña. Rutas, GPS y medallas, ¡qué más necesitas! La mejor app para el senderismo en Argentina.'
    }
  ]);

  </script>