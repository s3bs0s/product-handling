<template>
  <div class="modal">
    <div class="content">
      <div
        class="modalHeader"
        :class="[product.hasOwnProperty('_id') ? 'bgInfo' : 'bgSuccess']"
      >
        <h4 v-if="product.hasOwnProperty('_id')">Editar un producto</h4>
        <h4 v-else>Agregar un producto</h4>
        <button class="close" @click="close">
          <i class="icon-cross" />
        </button>
      </div>
      <div class="modalBody">
        <div class="formInput">
          <label>Nombre</label>
          <input
            v-on:keyup.enter="send"
            v-model="form.name"
            :disabled="loading"
            type="text"
          />
        </div>
        <div class="formInput">
          <label>Descripción</label>
          <input
            v-on:keyup.enter="send"
            v-model="form.description"
            :disabled="loading"
            type="text"
          />
        </div>
        <div class="formInput">
          <label>Imagen</label>
          <input
            v-on:keyup.enter="send"
            v-model="form.image_url"
            :disabled="loading"
            type="text"
          />
        </div>
        <div class="formInput">
          <label>Precio</label>
          <input
            v-on:keyup.enter="send"
            v-model.number="form.price"
            :disabled="loading"
            type="number"
          />
        </div>
        <div class="formInput">
          <label>Calificación</label>
          <stars v-model.number="form.qualification" large />
        </div>
        <div class="modalFooter">
          <button
            :disabled="loading"
            @click="close"
            class="btn danger"
          >
            Cerrar
          </button>
          <button
            v-if="product.hasOwnProperty('_id')"
            :disabled="loading"
            @click="send"
            class="btn info"
          >
            Editar
          </button>
          <button
            v-else
            :disabled="loading"
            @click="send"
            class="btn success"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Stars from '../Stars.vue'

  export default {
    components: {
      Stars
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