<template>
  <router-view/>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {}
    },
    created() {
      this.getLocalToken()
    },
    methods: {
      ...mapActions(['getLocalToken'])
    }
  }
</script>