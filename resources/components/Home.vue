<template>
  <div>
    <navbar />
    <div class="container home">
      <button class="site" disabled>
        <i class="icon-user" />
        <p>Perfil</p>
      </button>
      <router-link :to="{ name: 'products' }" tag="button" class="site">
        <i class="icon-price-tags" />
        <p>Productos</p>
      </router-link>
      <button class="site" disabled>
        <i class="icon-books" />
        <p>Proveedores</p>
      </button>
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue'

  export default {
    components: {
      Navbar
    },
    data() {
      return {}
    }
  }
</script>