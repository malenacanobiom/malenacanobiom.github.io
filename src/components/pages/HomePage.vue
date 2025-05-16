
<template>
    <NavBar></NavBar>
        <HomeLanding></HomeLanding>
    <FooterLanding></FooterLanding>
</template>   

<script setup>
    import 'bootstrap/dist/css/bootstrap.min.css';
    import NavBar from '../shared/NavBarLanding.vue'
    import FooterLanding from '../shared/FooterLanding.vue'
    import HomeLanding from '../layout/HomeLanding.vue'
</script>


<style>
    .btn-mobile {
        text-transform: uppercase;
        background-color: transparent;
        border-radius: 25px;
        padding: 2%;
        font-size: 16px;
    }
    figure{
        padding-top: 20%;
    }
    .detalle{
        font-size: 12px;
    }

    .icono{
        height: 3%;
        margin-right: 2%;
    }
</style>

