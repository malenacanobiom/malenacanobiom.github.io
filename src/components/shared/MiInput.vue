<template>
    <div>
      <label :for="props.name" class="d-block subtitulo-chico">{{ props.label }}</label>
      <input class="mi-input"
        :type="props.type"
        :name="props.name"
        :id="props.name"
        required
        :class="props.clase"
        :placeholder="props.placeholder"
        v-model="valor"
        @input="validarInput"
        @blur="verificarCampoVacio"
      />
      <p v-if="campoVacio">No dejes el campo vacío</p>
      <p v-if="!letra && !campoVacio && props.type !== 'tel' && props.type !== 'number'">Solo letras</p>
      <p v-if="!numero && !campoVacio && props.type === 'tel'">Solo números</p>
    </div>
  </template>
  
  <script setup>
    import 'bootstrap/dist/css/bootstrap.min.css'

  import { ref, defineProps } from 'vue';
  
  const props = defineProps(['label', 'name', 'type', 'placeholder', 'clase']);
  const valor = ref('');
  const letra = ref(true);
  const numero = ref(true);
  const campoVacio = ref(false);
  
  const validarInput = () => {
    const char_alpha = /^[A-Za-z]+$/;
    const char_numeric = /^[0-9]+$/;
  
    if (props.type !== 'tel') {
      letra.value = char_alpha.test(valor.value);
    }
  
    if (props.type === 'tel') {
      numero.value = char_numeric.test(valor.value);
    }
  };
  
  const verificarCampoVacio = () => {
    campoVacio.value = valor.value.trim().length === 0;
  };
  </script>