<template>
  <main class="container">
    <lazy-image :image="require(`~/static${image}`)" :alt="title" class="banner full" />
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
    const activity = await import('~/content/activities/' +
      params.activity +
      '.json')
    return activity
  },
  components: {
    Grid,
    Box,
    LazyImage
  }
}
</script>
