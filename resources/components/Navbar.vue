<template>
  <div class="navbar">
    <div class="side">
      <img class="logo" src="/image/one_group_white.png" alt="Logo">
      <div>
        <router-link
          v-if="currentRouteName !== 'home'"
          :to="{ name: 'home' }"
          tag="button"
          class="subButton"
        >
          HOME
        </router-link>
      </div>
    </div>
    <div class="side">
      <p class="user">{{ (user.name || '').toUpperCase() }}</p>
      <button class="logout" @click="signOff">
        <i class="icon-enter" />
      </button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        user: 'getAuthUser'
      }),
      currentRouteName() {
        return this.$route.name;
      }
    },
    methods: {
      ...mapActions(['logout']),
      signOff() {
        this.logout()
        this.$router.push({ name: 'login' })
      }
    }
  }
</script>