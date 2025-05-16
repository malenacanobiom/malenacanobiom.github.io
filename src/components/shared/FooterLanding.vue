<template>
    <footer>
        <div class="container">
            <div class="row d-flex align-items-center sct-border">
                <div class="col-4">
                    <h3 class="subtitulo-grande my-3">Seguinos en nuestras redes</h3>
                    <ul class="col-10 d-flex align-items-center justify-content-around">
                        <li class="col-3 d-inline icono"><a href="https://www.tiktok.com/es/explorAR"><img src="../../../public/assets/img/tiktok.svg" alt="icono de tiktok"/></a></li>
                        <li class="col-3 d-inline icono"><a href="https://twitter.com/ExplorAR"><img src="../../../public/assets/img/X.svg" alt="icono de x"/></a></li>
                        <li class="col-3 d-inline icono"><a href="https://es-la.facebook.com/ExplorAR"><img src="../../../public/assets/img/fb.svg" alt="icono de facebook"/></a></li>
                        <li class="col-3 d-inline icono"><a href="https://www.instagram.com/explorAR"><img src="../../../public/assets/img/ig.svg" alt="icono de instagram"/></a></li>
                    </ul>
                </div>
            
                <div class="col-4 px-5 border-x d-flex align-items-center">
                        <h1 class="text-center w-100 logo ">ExplorAR</h1>
                </div>
            
                    <div class="col-4">
                        <form action="#">
                            <div class="formulario col-10 d-inline-block">
                                <label class="subtitulo-grande my-3 col-12 text-center" for="mail">Unite a nuestro Newsletter</label>
                                <input class="mi-input w-100 text-center p-3" type="mail" name="mail" id="mail" placeholder="Ingresá tu mail" required>
                            </div>
                            <button class="miboton-pill-enter enter col-2" type="submit d-inline"><img src="../../../public/assets/img/enter.svg" alt="Icono de flecha para enviar"></button>
                        </form>
                </div>
            </div>
            <div class="row">
                
                <p class="col-12 text-center py-3">Derechos Reservados © 2023 ExplorAR</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import 'bootstrap/dist/css/bootstrap.min.css'
</script>

<style>
</style>