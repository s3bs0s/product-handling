<template>
  <div class="alerts" v-if="alerts.length > 0">
    <div class="alert" :class="alert.color" v-for="alert in alerts" :key="alert.id">
      <p>{{ alert.text }}</p>
      <button class="close" @click="closeAlert(alert.id)">x</button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        alerts: 'getAlerts'
      }),
    },
    methods: {
      ...mapActions(['closeAlert'])
    }
  }
</script>