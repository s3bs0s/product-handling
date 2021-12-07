<template>
  <div class="bodyUserForm">
    <user-form :loading="loading" @send="send" new-user />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import UserForm from './Form.vue'

  export default {
    components: {
      UserForm
    },
    data() {
      return {
        loading: false
      }
    },
    methods: {
      ...mapActions(['newAlert', 'register']),
      send(form) {
        if (this.loading) {
          return
        }
        this.loading = true

        this.register(form)
          .then(() => {
            this.$router.push({ name: 'login', query: { email: form.email } })
            this.newAlert({ text: 'Registrado correctamente, ahora puede iniciar sesión!', color: 'success' })
          })
          .catch(data => this.newAlert({ text: data.error, color: 'danger' }))
          .finally(() => this.loading = false)
      }
    }
  }
</script>