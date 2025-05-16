
<script >
import 'bootstrap/dist/css/bootstrap.min.css';
export default{
    props: {
        nombre: String,
        titulo: String,
        numero: String,
        estrellas: String,
        comentario: String,
    
}
}
</script>


<template>
    <div class="col-12 comentario p-3">
        <div class="d-flex comentario">
            <figure><img src="assets/img/Avatar.svg" alt=""></figure>
            <div class="w-75">
                <h4 class="subtitulo-grande">{{ nombre }}</h4>
                <h3 class="subtitulo-chico">{{ titulo }}</h3>
            </div>
            <div class="calificacion">
                <div class="num-calificacion">{{ numero }}</div>
                <figure><img :src="estrellas" alt="Icono de calificación"></figure>
            </div>
        </div>
        <div>
            <p class="col-12">{{ comentario }}</p>
        </div>
    </div>
</template>

<style>
    .comentario{
        background-color: var(--Verde-secundario);
        border-radius: 25px;
    }
    .num-calificacion{
        font-size: 20px;
        font-family: Ultra;
        color: var(--Verde-primario)
    }
    .comentario figure{
        padding: 0;
        width: 15%;
        margin-right: 3%;
    }
</style>