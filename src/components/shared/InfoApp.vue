<template>
    <section>
      <div class="container sct-border">
        <div class="row">
          <div class="col-6">
            <h2 class="titulo-chico mt-3">¿Qué podés hacer?</h2>
            <div class="my-4">
              <div v-for="(textoInfo, index) in textosInfoApp" :key="index">
                <TextoInfoApp :texto="textoInfo.texto" />
                <div v-if="index !== textosInfoApp.length - 1" class="linea-div-texto-pill"></div>
              </div>
            </div>
          </div>
          <figure class="col-6 contenedor-sec-2">
            <img :src="'assets/img/' + imagenes.InfoApp.url" :alt="imagenes.InfoApp.alt">
          </figure>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import TextoInfoApp from './TextoInfoApp.vue';
  
  const textosInfoApp = [
    { texto: "Elegí las rutas que quieras en base a tus necesidades. En ExplorAR podés filtrar tus búsquedas de mil maneras." },
    { texto: "Sé parte de nuestra comunidad. Te invitamos a compartir tu experiencia en cada viaje desde la sección foros." },
    { texto: "Aventurate en los caminos de forma segura. Con la geolocalización en tiempo real siempre sabrás a dónde dirigirte." }
  ];
  
  const imagenes = {
    InfoApp: {
        alt: 'Foto de montañas nevadas en la Patagonia Argentina',
        url: 'pexels-bren-pintelos-7476110.jpg'
    }
  };
  
  </script>


<style scoped>
    figure{
        padding: 0;
    }
</style>
