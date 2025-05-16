<template>
    <div class="container">
        <div class="row">
            <figure class="offset-1 col-10">
                <img class="w-100" src="assets/img/logo.svg" alt="Logo de explorAR, es un icono de un paisaje con lineas un un sol en color azul">
            </figure>
            <div class="offset-1 col-10">
                <h1 class="titulo-grande text-center w-100">Bienvenido a ExplorAR</h1>
                <p class="w-100">¿Estás listo para empezar tu nueva aventura?</p>
            </div>
            <div class="offset-1 col-10">
                <RouterLink to="/HomeApp" class="d-block btn-mobile w-100 mt-3 text-center">Iniciar Sesión</RouterLink>
                <RouterLink to="/HomeApp" class="d-block btn-mobile w-100 mt-2 text-center"><img class="icono" src="assets/img/LogoGoogle.svg" alt="Logo de Google">Iniciar Sesión con Google</RouterLink>
                <div class="detalle text-center mt-2">¿Todavía no tenés una cuenta? <vue-router class="link"> Registrate acá</vue-router></div>
            </div>
        </div>
    </div>
</template>   

<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
    export default {
        name: "LogIn",
    }
</script>


<style scoped>
    .btn-mobile {
        text-transform: uppercase;
        background-color: transparent;
        border-radius: 25px;
        padding: 2%;
        font-size: 16px;
        border: 2px solid var(--Negro);
        color: var(--Negro);
        text-decoration: none;
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

