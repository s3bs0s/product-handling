<template>
  <div>
    <router-view/>
    <alerts />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Alerts from './components/Alerts.vue'

  export default {
    components: {
      Alerts
    },
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