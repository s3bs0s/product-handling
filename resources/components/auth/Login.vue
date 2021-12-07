<template>
  <div class="bodyUserForm">
    <user-form :loading="loading" @send="send" />
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
      ...mapActions(['newAlert', 'login']),
      send(form) {
        if (this.loading) {
          return
        }
        this.loading = true

        this.login(form)
          .then(() => this.$router.push({ name: 'home' }))
          .catch(data => this.newAlert({ text: data.error, color: 'danger' }))
          .finally(() => this.loading = false)
      }
    }
  }
</script>