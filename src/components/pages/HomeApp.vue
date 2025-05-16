<script setup> 
    import 'bootstrap/dist/css/bootstrap.min.css'
    import NavApp  from "../shared/NavBarApp.vue"
    import CardRuta from "../shared/CardRuta.vue"
    import {ref, onMounted} from 'vue'
    import ruta from '../../data/rutas.json'
    let rutas = ref([])

    onMounted(() => {
        rutas.value = ruta.rutas 
    })
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 input-wrapper mt-3">
                <input class="mi-input col-12" type="search" id="search" name="search" placeholder="¿Cuál es el destino de tu aventura?"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" class="input-icon">
                    <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.133 12.867 2 9 2C5.133 2 2 5.133 2 9C2 12.867 5.133 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" fill="#BECFBB"/>
                </svg>
            </div>
        </div>
    
        <div class="list-group">
            <div class="list-group-item" :key="item.id" v-for="item in rutas.value">
                <RouterLink :to="`/detalle/${item.id}`">
                    <CardRuta :data="item"></CardRuta>
                </RouterLink>
            </div>
        </div>


        <!--Las cards del detalle-->
        <div class="row">  
            <div class="col-12">
                <h2 class="titulo-chico mt-2">Los mejores paseos de la zona</h2>
                <div class="scroll-container">
                    <div class="col-11 card-ruta">
                        <RouterLink to="/detalle">
                        <!--Foto del paisaje-->
                        <figure class="fig-card col-12"><img class="img-card" src="assets/img/LagunaEsmeralda.jpg" alt=""></figure>
                        <!--Titulo y calificación-->
                        <div class="d-flex justify-content-between px-2">
                            <h3 class="subtitulo-chico d-inline-block">Titulo de la ruta</h3>
                            <div class="d-inline-flex justify-content-end align-items-baseline">
                                <figure class="no-padding"><img src="assets/img/puntaje-4.svg" alt="" srcset=""></figure>
                                <p class="texto-detalle">4 (2)</p>
                            </div>
                        </div>
                        <!--Breve detalle de ruta-->
                        <div class="px-2 m-0">
                            <p>Calle, Localidad, Provincia</p>
                            <p>Longitud: 45km. Est: 3h</p>
                        </div>
                    </RouterLink>

                      </div>


                    <div class="col-11 card-ruta">
                        <!--Foto del paisaje-->
                        <figure class="fig-card col-12"><img class="img-card" src="assets/img/LagunaEsmeralda.jpg" alt=""></figure>
                        <!--Titulo y calificación-->
                        <div class="d-flex justify-content-between px-2">
                            <h3 class="subtitulo-chico d-inline-block">Titulo de la ruta</h3>
                            <div class="d-inline-flex justify-content-end align-items-end">
                                <figure class="no-padding"><img src="assets/img/puntaje-4.svg" alt="" srcset=""></figure>
                                <p class="texto-detalle">4 (2)</p>
                            </div>
                        </div>
                        <!--Breve detalle de ruta-->
                        <div class="px-2 m-0">
                            <p>Calle, Localidad, Provincia</p>
                            <p>Longitud: 45km. Est: 3h</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>


        <!--Los filtros por paisaje-->
        <div class="row">
            <div class="col-12">
                <div class="separador mb-3 mt-5"></div>

                <h2 class="titulo-chico mt-2 mb-4">Buscá rutas por paisajes</h2>

                <div class="scroll-container">
                    <div class="filtro-container col-4 m-2 no-margin-left">
                        <figure class="w-75"><img class="w-100" src="assets/img/LagunaEsmeralda.jpg" alt=""></figure>
                        <h3 class="subtitulo-chico text-center mt-2">Cascadas</h3>
                    </div>

                    <div class="filtro-container col-4 mx-2">
                        <figure class="w-75"><img class="w-100" src="assets/img/LagunaEsmeralda.jpg" alt=""></figure>
                        <h3 class="subtitulo-chico text-center mt-2">Montañas</h3>
                    </div>

                    <div class="filtro-container col-4 mx-2">
                        <figure class="w-75"><img class="w-100" src="assets/img/LagunaEsmeralda.jpg" alt=""></figure>
                        <h3 class="subtitulo-chico text-center mt-2">Bosques</h3>
                    </div>

                    <div class="filtro-container col-4 mx-2">
                        <figure class="w-75"><img class="w-100" src="assets/img/LagunaEsmeralda.jpg" alt=""></figure>
                        <h3 class="subtitulo-chico text-center mt-2">Desierto</h3>
                    </div>

                    <div class="filtro-container col-4 mx-2">
                        <figure class="w-75"><img class="w-100" src="assets/img/LagunaEsmeralda.jpg" alt=""></figure>
                        <h3 class="subtitulo-chico text-center mt-2">Serros</h3>
                    </div>
                </div>
                <div class="separador"></div>
            </div>
        </div>

        <!--Acá tienen que ir de nuevo las cards de paisajes-->
        <NavApp></NavApp>
        <!-- CIERRE DIV CONTAINER -->
    </div>

</template>   




<style>
.no-margin-left{
    margin-left: 0!important;
    margin-bottom: 0!important;
    margin-top: 0!important;

}

.filtro-container img{

    border-radius: 50%;
    aspect-ratio: 1/1;
}

.filtro-container figure{
    aspect-ratio: 1 / 1;
    padding-top: 15%;
    margin: 0 12.5%;
}


.filtro-container{
    background-color: #DFE4DB;
    height: 15%;
    border-radius: 45% 45% 0 0;

}
.separador{
    background-color: var(--Negro);
    height: 2px;
}

.card-ruta p{
    margin-top: 0;
    margin-bottom: 1%;
}

.no-padding{
    padding: 0;
}
    .texto-detalle{
        color: #BECFBB;
        font-size: 12px;
        margin-left: 8%;
    }
    .card-ruta{
        margin-right: 3%;
        background-color: #DFE4DB;
        border-radius: 25px;
        padding-top: 0;
        padding-bottom: 5%;
    }
    .img-card{
        width: -webkit-fill-available;
        border-radius: 25px 25px 125px 0px;
    }

    .fig-card{
        padding: 0;
        border-radius: 25px;
    }

    .scroll-container {
      display: flex;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch; /* Propiedad para el desplazamiento en iOS */
      white-space: nowrap; /* Evitar que las tarjetas se envuelvan */
      
    }

    .input-wrapper {
       position: relative;
       font-size: 14px;

    }
    #search{
        padding: 5% 12%;
    }
    .input-icon {
       color: #191919;
       position: absolute;
       margin: 0 5%;
       width: 20px;
       height: 20px;
       left: 12px;
       top: 50%;
       transform: translateY(-50%);
    }
</style>

