<template>
  <div class="formInput">
    <label>{{ label }}</label>
    <input
      v-if="type === 'number'"
      v-on:keyup.enter="$emit('send', value)"
      :value="value"
      :disabled="disabled"
      type="number"
      :placeholder="placeholder"
      @input="input"
    />
    <textarea
      v-else-if="type === 'textarea'"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    ></textarea>
    <input
      v-else
      v-on:keyup.enter="$emit('send', value)"
      :value="value"
      :disabled="disabled"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
  export default {
    props: {
      value: { type: [String, Number] },
      label: { type: String },
      placeholder: { type: String },
      type: { type: String, default: 'text' },
      disabled: { type: Boolean },
    },
    data() {
      return {}
    },
    methods: {
      input({ target }) {
        this.$emit('input', Number(target.value.replace(/[^0-9\.]+/g, '')))
      }
    }
  }
</script>