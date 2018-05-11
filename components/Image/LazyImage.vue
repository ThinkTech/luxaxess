<template>
  <img
    :src="image.src"
    :srcset="image.srcSet"
  />
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    image: Object
  }
}
</script>
