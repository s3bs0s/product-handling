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
          <button class="btn success" @click="modalAddProduct">
            Agregar Producto
          </button>
        </div>
      </div>
      <div class="list">
        <div class="card" v-for="product, index in products" :key="index">
          <div
            class="cardHeader"
            :style="{ backgroundImage: `url('${product.image_url}')` }"
          />
          <div class="m-b-10">
            <h6 class="fs-20">{{ product.name }}</h6>
            <p class="description">{{ product.description }}</p>
            <div class="info">
              <stars v-model="product.qualification" read-only />
              <p class="price">$ {{ product.price.toLocaleString() }}</p>
            </div>
          </div>
          <div class="cardActions">
            <button
              class="btn danger"
              @click="modalDeleteProduct(product)"
            >
              <i class="icon-bin" />
            </button>
            <button
              class="btn info"
              @click="modalUpdateProduct(product)"
            >
              <i class="icon-pencil" />
            </button>
          </div>
        </div>
      </div>
      <product-form
        v-if="modalAddAndUpdate"
        :product="currentProduct"
        :loading="loading"
        @close="closeModal"
        @send="send"
      />
      <delete
        v-if="modalDelete"
        :product="currentProduct"
        :loading="loading"
        @close="closeModal"
        @send="remove"
      />
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Navbar from '../Navbar.vue'
  import Stars from '../Stars.vue'
  import ProductForm from './Form.vue'
  import Delete from './Delete.vue'

  export default {
    components: {
      Navbar,
      Stars,
      ProductForm,
      Delete
    },
    data() {
      return {
        modalAddAndUpdate: false,
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
      })
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
        this.modalAddAndUpdate = false
        this.modalDelete = false
      },
      modalDeleteProduct(product) {
        this.currentProduct = product
        this.modalDelete = true
      },
      modalUpdateProduct(product) {
        this.currentProduct = product
        this.modalAddAndUpdate = true
      },
      modalAddProduct() {
        this.currentProduct = {}
        this.modalAddAndUpdate = true
      },
      send(form) {
        if (this.loading) {
          return
        }
        this.loading = true

        let method = this.saveProduct
        if (form.hasOwnProperty('_id')) {
          method = this.editProduct
        }

        method(form)
          .then(() => {
            this.modalAddAndUpdate = false
            if (form.hasOwnProperty('_id')) {
              return this.newAlert({ text: 'Producto editado con exito!', color: 'success' })
            }
            this.newAlert({ text: 'Producto agregado con exito!', color: 'success' })
          })
          .catch(data => this.newAlert({ text: data.error, color: 'danger' }))
          .finally(() => this.loading = false)
      },
      remove(form) {
        if (this.loading) {
          return
        }
        this.loading = true

        this.removeProduct(form)
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