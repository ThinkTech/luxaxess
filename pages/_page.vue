<template>
  <main class="container">
    <img :src="image" :alt="title" class="banner full" />
    <article>
      <h1 class="headline">{{ title }}</h1>
      <p>{{ content }}</p>
    </article>    
  </main>  
</template>

<script>
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
    Box
  }
}
</script>
