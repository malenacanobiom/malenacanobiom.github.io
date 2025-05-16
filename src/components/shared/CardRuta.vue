<script setup>

import { defineProps } from 'vue';

const props = defineProps({data: Object})
</script>

<template>
    <div class="col-11 card-ruta">
        <!--Foto del paisaje-->

        <figure class="fig-card col-12"><img class="img-card" :src="`assets/img/${props.data.imagenes[0]}`" :alt="'Foto de '+ props.data.titulo"></figure>
        <!--Titulo y calificación-->
        <div class="d-flex justify-content-between px-2">
            <h3 class="subtitulo-chico d-inline-block">{{props.data.titulo}}</h3>
            <div class="d-inline-flex justify-content-end align-items-baseline">
                <figure class="no-padding"><img :src="props.data.calificacion" alt="icono calificacion"></figure>
                <p class="texto-detalle">{{props.data.calificacion}}</p>
            </div>
        </div>
        <!--Breve detalle de ruta-->
        <div class="px-2 m-0">
            <p>{{props.data.ubicacion}}</p>
            <p>Longitud: {{props.data.longitud}}km Est: {{props.data.duracion}}</p>
        </div>
      </div>
</template>

<style>
</style>