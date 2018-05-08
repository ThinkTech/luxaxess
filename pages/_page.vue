<template>
  <main class="container">
    <lazy-image :src="require(`~/static${image}`)" :src-placeholder="require('~/assets/images/blur.jpg')" :alt="title" class="banner full" />
    <article>
      <h1 class="headline">{{ title }}</h1>
      <p>{{ content }}</p>
    </article>    
  </main>  
</template>

<script>
import LazyImage from '~/components/Image/LazyImage.vue'
import { Grid, Box } from '~/components/GridBox'
export default {
  layout: 'page',
  head() {
    const { title, description, image } = this
    return {
      title: title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            description || 'Luxaxes all business center pour tous vos services.'
        }
      ]
    }
  },
  async asyncData({ params }) {
    const service = await import('~/content/cms/' + params.page + '.json')
    return service
  },
  components: {
    Grid,
    Box,
    LazyImage
  }
}
</script>
