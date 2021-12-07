<template>
  <div class="stars" :class="{ readOnly, large }">
    <i :class="clasess(0)" @mouseover="mouseOver(1)" @mouseleave="mouseLeave" @click="changeStar(1)" />
    <i :class="clasess(1)" @mouseover="mouseOver(2)" @mouseleave="mouseLeave" @click="changeStar(2)" />
    <i :class="clasess(2)" @mouseover="mouseOver(3)" @mouseleave="mouseLeave" @click="changeStar(3)" />
    <i :class="clasess(3)" @mouseover="mouseOver(4)" @mouseleave="mouseLeave" @click="changeStar(4)" />
    <i :class="clasess(4)" @mouseover="mouseOver(5)" @mouseleave="mouseLeave" @click="changeStar(5)" />
  </div>
</template>

<script>
  export default {
    props: {
      value: { type: Number, default: 0 },
      readOnly: { type: Boolean },
      large: { type: Boolean }
    },
    data() {
      return {
        starHover: 0
      }
    },
    methods: {
      clasess(qualification) {
        if (this.value > qualification || this.starHover > qualification) {
          return 'icon-star-full'
        }
        return 'icon-star-empty'
      },
      changeStar(newQualification) {
        if (!this.readOnly) {
          this.$emit('input', newQualification)
        }
      },
      mouseOver(qualification) {
        if (!this.readOnly) {
          this.starHover = qualification
        }
      },
      mouseLeave() {
        if (!this.readOnly) {
          this.starHover = 0
        }
      }
    }
  }
</script>