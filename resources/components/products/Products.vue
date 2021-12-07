<template>
  <div>
    <navbar />
    <div class="container">
      <div class="header">
        <div class="title">
          <i class="icon-price-tags" />
          <h1>Productos</h1>
        </div>
        <div>
          <button class="btn success" @click="modalProduct({}, 'modalForm')">
            Agregar Producto
          </button>
        </div>
      </div>
      <div class="list">
        <div class="card" v-for="product, index in products" :key="index">
          <div class="cardHeader" :style="{ backgroundImage: `url('${product.image_url}')` }" />
          <div class="m-b-10">
            <h6 class="fs-20">{{ product.name }}</h6>
            <p class="description">{{ product.description }}</p>
            <div class="info">
              <stars v-model="product.qualification" read-only />
              <p class="price">$ {{ product.price.toLocaleString() }}</p>
            </div>
          </div>
          <div class="cardActions">
            <button class="btn danger" @click="modalProduct(product, 'modalDelete')">
              <i class="icon-bin" />
            </button>
            <button class="btn info" @click="modalProduct(product, 'modalForm')">
              <i class="icon-pencil" />
            </button>
          </div>
        </div>
      </div>
      <modal
        v-if="modalForm"
        :header-classes="isOldProduct ? 'bgInfo' : 'bgSuccess'"
        :title="(isOldProduct ? 'Editar' : 'Agregar') + ' un producto'"
        @close="closeModal"
      >
        <product-form :product="currentProduct" :loading="loading" @close="closeModal" @send="send" />
      </modal>
      <modal v-if="modalDelete" header-classes="bgDanger" title="Eliminar un producto" @close="closeModal">
        <div class="modalBody">
          <p>¿Esta seguro que desea eliminar el producto <strong>"{{ currentProduct.name }}"</strong>?</p>
          <div class="modalFooter">
            <button :disabled="loading" @click="closeModal" class="btn danger">Cerrar</button>
            <button :disabled="loading" @click="remove(currentProduct._id)" class="btn danger">Eliminar</button>
          </div>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Navbar from '../Navbar.vue'
  import Stars from '../Stars.vue'
  import Modal from '../Modal.vue'
  import ProductForm from './Form.vue'

  export default {
    components: {
      Navbar,
      Stars,
      Modal,
      ProductForm
    },
    data() {
      return {
        modalForm: false,
        modalDelete: false,
        loading: false,
        currentProduct: {}
      }
    },
    created() {
      this.fetchProducts()
    },
    computed: {
      ...mapGetters({
        products: 'getProducts'
      }),
      isOldProduct() {
        return this.currentProduct.hasOwnProperty('_id')
      }
    },
    methods: {
      ...mapActions([
        'newAlert',
        'fetchProducts',
        'saveProduct',
        'editProduct',
        'removeProduct'
      ]),
      closeModal() {
        this.modalForm = false
        this.modalDelete = false
      },
      modalProduct(product, modal) {
        this.currentProduct = product
        this[modal] = true
      },
      send(form) {
        if (this.loading) {
          return
        }
        this.loading = true

        let method = this.saveProduct
        if (this.isOldProduct) {
          method = this.editProduct
        }

        method(form)
          .then(() => {
            this.modalForm = false
            this.newAlert({ text: `Producto ${this.isOldProduct ? 'editado' : 'agregado'} con exito!`, color: 'success' })
          })
          .catch(data => this.newAlert({ text: data.error, color: 'danger' }))
          .finally(() => this.loading = false)
      },
      remove(id) {
        if (this.loading) {
          return
        }
        this.loading = true

        this.removeProduct(id)
          .then(() => {
            this.modalDelete = false
            this.newAlert({ text: 'Producto eliminado con exito!', color: 'success' })
          })
          .catch(data => this.newAlert({ text: data.error, color: 'danger' }))
          .finally(() => this.loading = false)
      }
    }
  }
</script>