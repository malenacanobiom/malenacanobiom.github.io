<template>
    <header>
        <div class="container">
            <nav class="row justify-content-around py-3 d-flex align-items-center justify-content-center">
                <ul class="col-3">
                    <RouterLink to="/" class="link-nav d-inline subrayado">Home</RouterLink>
                    <RouterLink to="/Rutas"  class="link-nav d-inline m-3 subrayado">Rutas</RouterLink>
                    <RouterLink to="/Contacto"  class="link-nav d-inline subrayado">Contacto</RouterLink>
                </ul>
                <h1 class="col-3 d-inline logo">ExplorAR</h1>
                <BotonDescarga texto="Descargá la App" clase="col-3 d-inline miboton p-3"></BotonDescarga>
            </nav>
        </div>
    </header>
</template>


<script setup>

    import { RouterLink } from 'vue-router'
    import 'bootstrap/dist/css/bootstrap.min.css'
    import BotonDescarga from './BotonDescarga.vue'

</script>

<style>
.logo{
    font-family: 'Ultra', serif;
}
.subrayado{
    text-decoration: none;
}

.link-nav{
    color: var(--Negro, #404040);
    text-align: center;
    font-family: Ubuntu;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: none;
    padding-right: 4%;
}
</style>