<template>
  <div class="userForm">
    <div class="header">
      <h2 v-if="newUser">Nuevo usuario</h2>
      <h2 v-else>Iniciar sesión</h2>
    </div>
    <hr>
    <div class="content">
      <div class="formInput" v-if="newUser">
        <label>Nombre</label>
        <input
          v-on:keyup.enter="send"
          v-model="form.name"
          :disabled="loading"
          type="text"
          placeholder="Nombre completo"
        />
      </div>
      <div class="formInput">
        <label>Email</label>
        <input
          v-on:keyup.enter="send"
          v-model="form.email"
          :disabled="loading"
          type="text"
          placeholder="Ejm. plopez@onegroup.co"
        />
      </div>
      <div class="formInput">
        <label>Password</label>
        <input
          v-on:keyup.enter="send"
          v-model="form.password"
          :disabled="loading"
          type="password"
        />
      </div>
    </div>
    <div class="footer">
      <router-link
        v-if="newUser" 
        :disabled="loading"
        :to="{ name: 'login' }"
        tag="button"
        class="btn info"
      >
        Ya tengo cuenta
      </router-link>
      <router-link
        v-else
        :disabled="loading"
        :to="{ name: 'register' }"
        tag="button"
        class="btn info"
      >
        Soy nuevo
      </router-link>
      <button class="btn success" :disabled="loading" @click="send">
        Enviar
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      newUser: { type: Boolean },
      loading: { type: Boolean }
    },
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    created() {
      if (this.$route.query && this.$route.query.email && !this.newUser) {
        this.form.email = this.$route.query.email
      }
    },
    methods: {
      send() {
        this.$emit('send', this.form)
      }
    }
  }
</script>