<template>
  <div class="modal">
    <div class="content">
      <div class="modalHeader" :class="headerClasses">
        <h4>{{ title }}</h4>
        <button class="close" @click="$emit('close')">
          <i class="icon-cross" />
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      headerClasses: { type: String },
      title: { type: String }
    },
    data() {
      return {}
    }
  }
</script>