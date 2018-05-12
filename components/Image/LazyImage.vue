<template>
  <img
    ref="img"
    :src="image.placeholder"
    :data-src-set="image.srcSet"
  />
</template>

<script>
const load = (img, observer) => {
  if (observer) {
    img.addEventListener('load', function() {
      observer.unobserve(img)
    })
  }

  const dataSrcSet = img.getAttribute('data-src-set')

  dataSrcSet && img.setAttribute('srcset', dataSrcSet)
}
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    image: Object
  },
  mounted() {
    if (!('IntersectionObserver' in window)) {
      load(this.$refs.img)
      return
    }
    const observer = new IntersectionObserver(
      function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.intersectionRatio > observer.thresholds[0]) {
            load(entry.target, observer)
          }
        })
      },
      {
        root: null,
        rootMargin: '32px',
        threshold: 0.3
      }
    )
    observer.observe(this.$refs.img)
  }
}
</script>
