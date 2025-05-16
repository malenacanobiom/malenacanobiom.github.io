<template>
    <section class="hero h-550">
        <div class="container-fluid border-b  p-0">
            <div class="position-relative">
                    <figure class="col-6 position-absolute h-550">
                    <img :src="'assets/img/' + imagenes.hero.url" :alt="imagenes.hero.alt">
                    </figure>
                    <div class="col-5 offset-5 position-absolute mt-5">
                        <h2 class="text-left titulo-grande text-end">Conocé la belleza de Argentina</h2>
                        <p class="offset-2 my-3">Emprendé tu viaje de nuestra mano viendo el país cómo nunca antes, aventurate en las mejores rutas con las vistas más hermosas</p>
                        <BotonDescarga clase="offset-5 col-4 miboton-pill p-3 my-3" texto="Descargá la App"></BotonDescarga>
                    </div>
                </div>
            </div>
        </section>`
</template>

<script setup>
    import BotonDescarga from "./BotonDescarga.vue"

    const imagenes = {
    hero:{
        alt: 'Foto de Ushuaia, Argentina',
        url: 'ushuaia.jpg'
    }}
</script>

<style scoped>
.hero img{
    border-radius: 0 0 500px;
}

.hero figure{
    padding: 0;
}
.miboton-pill{
        text-decoration: none;
    }
</style>