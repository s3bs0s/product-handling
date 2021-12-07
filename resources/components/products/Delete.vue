<template>
  <div class="modal">
    <div class="content">
      <div class="modalHeader bgDanger">
        <h4>Eliminar un producto</h4>
        <button class="close" @click="close">
          <i class="icon-cross" />
        </button>
      </div>
      <div class="modalBody">
        <p>¿Esta seguro que desea eliminar el producto "{{ product.name }}"?</p>
        <div class="modalFooter">
          <button
            :disabled="loading"
            @click="close"
            class="btn danger"
          >
            Cerrar
          </button>
          <button
            :disabled="loading"
            @click="send"
            class="btn danger"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      product: { type: Object, default: () => ({}) },
      loading: { type: Boolean }
    },
    data() {
      return {}
    },
    methods: {
      close() {
        this.$emit('close')
      },
      send() {
        this.$emit('send', this.product._id)
      }
    }
  }
</script>