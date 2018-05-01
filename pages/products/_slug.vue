<template>
  <main class="container">
    <img :src="image" :alt="title" class="banner full" />
    <article>
      <h1 class="headline">{{ title }}</h1>
      <h2 class="price">{{ Intl.NumberFormat('fr', {
        style: 'currency',
        currency: 'XOF'
      }).format(price)
        .replace(/&nbsp;/gi, ' ') }}</h2>
      <h3>{{ description }}</h3>
      <p>{{ content }}</p>
      <div class="actions">
        <a class="button" href="/contact">Passez votre commande →</a>
      </div>      
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
    const product = await import('~/content/products/' + params.slug + '.json')
    return product
  },
  components: {
    Grid,
    Box
  }
}
</script>

<style scoped>
.actions {
  text-align: center;
}
.button {
  margin: 3.25em auto 1.625em;
}
</style>
