<template>
  <form action="#">
    <h3 class="subtitulo-grande w-100 text-start">Información Personal</h3>
    <div class="d-flex justify-content-around">
      <mi-input label="Nombre" type="text" name="nombre" placeholder="Ingresá tu nombre"></mi-input>
      <mi-input label="Apellido" type="text" name="apellido" placeholder="Ingresá tu apellido"></mi-input>
      <mi-input label="Nacimiento" type="date" name="nacimiento" placeholder="Ingresá tu apellido"></mi-input>
    </div>
    
    <h3 class="subtitulo-grande w-100 text-start">Información de Contacto</h3>
    <div class="d-flex justify-content-around">
      <mi-input label="Teléfono" type="tel" name="tel" placeholder="Ingresá tu teléfono"></mi-input>
      <mi-input label="Mail" type="email" name="mail" placeholder="Ingresá tu mail"></mi-input>
    </div>

    <mi-input label="Dejá tu Mensaje" type="text-area" name="mensaje" placeholder="Dejanos saber tu opinión" clase="mi-input msj-input"></mi-input>

    <div class="form-check form-switch mi-check col-10 offset-1 d-flex align-items-center">
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" style="width: 10%;" checked>
      <label class="form-check-label" for="flexSwitchCheckChecked">Me gustaría recibir el boletín informativo de ExplorAR y estar al tanto de las últimas rutas, consejos de senderismo y actualizaciones emocionantes.</label>
    </div>

    <button type="submit" class="miboton-pill p-5 py-3 col-3 offset-4 my-3">Enviar</button>
  </form> 
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
import MiInput from './MiInput.vue';
</script>

<style>
</style>
