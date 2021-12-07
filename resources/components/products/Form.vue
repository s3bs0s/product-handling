<template>
  <div class="modalBody">
    <div class="imageSection">
      <div class="preview" v-if="form.image_url" :style="{ backgroundImage: `url('${form.image_url}')` }" />
      <form-input v-model="form.image_url" label="Imagen" :disabled="loading" @send="send" />
    </div>
    <form-input v-model="form.name" label="Nombre" :disabled="loading" @send="send" />
    <form-input v-model="form.description" label="Descripción" type="textarea" :disabled="loading" @send="send" />
    <form-input v-model="form.price" label="Precio" type="number" :disabled="loading" @send="send" />
    <div class="formInput">
      <label>Calificación</label>
      <stars v-model.number="form.qualification" large />
    </div>
    <div class="modalFooter">
      <button :disabled="loading" @click="$emit('close')" class="btn danger">
        Cerrar
      </button>
      <button v-if="product.hasOwnProperty('_id')" :disabled="loading" @click="send" class="btn info">
        Editar
      </button>
      <button v-else :disabled="loading" @click="send" class="btn success">
        Agregar
      </button>
    </div>
  </div>
</template>

<script>
  import Stars from '../Stars.vue'
  import FormInput from '../FormInput.vue'

  export default {
    components: {
      Stars,
      FormInput
    },
    props: {
      product: { type: Object, default: () => ({}) },
      loading: { type: Boolean }
    },
    data() {
      return {
        form: {
          name: '',
          description: '',
          price: 0,
          image_url: '',
          qualification: 0
        }
      }
    },
    mounted() {
      if (this.product.hasOwnProperty('_id')) {
        this.form = { ...this.product }
      }
    },
    methods: {
      close() {
        this.$emit('close')
      },
      send() {
        this.$emit('send', this.form)
      }
    }
  }
</script>