<script> 
import 'bootstrap/dist/css/bootstrap.min.css'
import SliderApp from '../shared//SliderDetalle.vue'
import NavApp from'../shared/NavBarApp.vue'
import Caracteristica from '../shared/CaracteristicaRuta.vue'
import Comentario from '../shared/ComentarioRuta.vue'
let direc ="assets/img/"
    export default {
        name: "DetalleRuta",
        components:{
            NavApp,
            SliderApp,
            Caracteristica,
            Comentario
        },
        data() {
            return {

              direc
            };
    }
}


    
</script>

<template>
    <div class="container">
        <div class="row">
            <SliderApp :img1="direc+'LagunaEsmeralda.jpg'" :img2="rutaImagen2" :img3="rutaImagen3"></SliderApp>
        <div col-12>
            <ul class="filtro d-flex">
                <li>Dificultad</li>
                <li>Paisaje</li>
                <li>Actividad</li>
            </ul>
        </div>
        <div>
            <div class="d-flex">
            <Caracteristica clase="col-8" titulo="Ubicación" :imagen='direc+"ubicacion.jpg"' texto="Calle, Localidad, Provincia"></Caracteristica>
            <Caracteristica clase="col-4" titulo="Duración" :imagen="direc+'time.svg'" texto="15 h"></Caracteristica>
        </div>
        <div class="d-flex">

            <Caracteristica clase="col-8" titulo="Actividad" imagen="assets/img/trekking.svg" texto="Senderismo"></Caracteristica>
            <Caracteristica clase="col-4" titulo="Miradores" imagen="assets/img/mirador.svg" texto="5"></Caracteristica>
        </div>
            <Caracteristica clase="col-12" titulo="Animales" imagen="assets/img/animal.svg" texto="Animal 1, Animal 2, Animal 3, Animal 4"></Caracteristica>
        </div>
        <div class="d-flex justify-content-between">
            <button class="btn-mobile">Agregar a mi viaje</button>
            <button class="btn-mobile">Ver Ruta</button>
        </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h2 class="titulo-chico">Comentarios</h2>
                <Comentario nombre="Maria Josefa" titulo="Hermoso lugar" numero="4"  :estrellas="direc+'puntaje-4.svg'" comentario="Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor tellus, ultrices conubia habitant fringilla a auctor purus tincidunt malesuada, sed risus nunc phasellus aliquet facilisis tortor nibh. Pretium id suspendisse "></Comentario>
            </div>
        </div>
        <NavApp></NavApp>
    </div>
    
</template>



<style>

    .btn-mobile{
        width: 48%;
    }

    .filtro{
        list-style: none;
        padding: 0;
    }
    .filtro li{
        padding: 2% 3%;
        width: max-content;
        color: var(--Azul);
        border: 2px solid var(--Azul);
        background-color: var(--Blanco);
        border-radius: 50px;   
        font-weight: 600;
        margin: 2% 1%;
        }
        .filtro li:first-child{
            margin-left: 0;
            border-radius: 50px  50px 50px 0px;
        }
        .filtro li:last-child{
            margin-right: 0;
            border-radius: 50px 0px 50px 50px;
        }
</style>