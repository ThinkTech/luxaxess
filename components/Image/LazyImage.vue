<template>
  <v-lazy-image
    :src="src"
    :src-placeholder="srcPlaceholder"
    @load="animate"
  ></v-lazy-image>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    src: String,
    // eslint-disable-next-line vue/require-default-prop
    srcPlaceholder: String,
    blurLevel: {
      type: Number,
      default: 30
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data: () => ({ rate: 1 }),
  computed: {
    deviation() {
      console.log(this.rate)
      return this.blurLevel * this.rate
    }
  },
  methods: {
    animate() {
      const start = Date.now() + this.duration

      const step = () => {
        const remaining = start - Date.now()

        if (remaining < 0) {
          this.rate = 0
        } else {
          this.rate = remaining / this.duration
          requestAnimationFrame(step)
        }
      }

      requestAnimationFrame(step)
    }
  }
}
</script>

<style scoped>
.filter {
  display: none;
}
</style>
