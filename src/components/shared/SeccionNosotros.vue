<template>
    <section class="h-325">
      <div class="container-fluid p-0">
        <div class="position-relative">
          <figure class="col-7 position-absolute h-325">
            <img :src="'assets/img/' + imagenes.nosotros.url" :alt="imagenes.nosotros.alt">
          </figure>
  
          <div class="col-6 offset-4 position-absolute mt-5">
            <h2 class="text-left titulo-chico text-end">Un poco de nosotros</h2>
            <p class="offset-2 my-3">ExplorAR está formado por amantes de la naturaleza argentina. Nos apasiona explorar y queremos que vos también lo hagas. Unite a nuestra comunidad y descubrí la belleza de Argentina con nosotros.</p>
            <BotonDescarga :clase="'offset-8 col-4 miboton p-3 my-2'" :texto="'Descargá la App'"></BotonDescarga>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import BotonDescarga from './BotonDescarga.vue';
  
  const imagenes = {
    nosotros: {
      url: 'nosotros.jpg',
      alt: 'Foto de las Cataratas del Iguazú, Misiones, Argentina'
    }
  };
  </script>

<style scoped>
    figure{
        padding: 0
    }
</style>