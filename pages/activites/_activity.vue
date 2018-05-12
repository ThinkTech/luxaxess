<template>
  <main class="container">
    <lazy-image :image="require(`~/static${image}`)" :alt="title" class="banner full" />
    <article>
      <h1 class="headline">{{ title }}</h1>
      <h2>{{ description }}</h2>
    </article>
    <grid :col="{tablet:2, laptop: 4}" gap="1.625em" class="products-list">
      <box v-for="{title, description, path, image, price} in getProducts()" :key="title" class="picture caption zoomIn">                
      <nuxt-link :to="path">
        <lazy-image :image="require(`~/static${image}`)" :alt="title"/>        
        <h1 class="text subhead">{{ title.toUpperCase() }}</h1>
        <h2>{{ title.toUpperCase() }}</h2>                                  
        <h3>{{ description }}</h3>                                  
        <div class = "details">
				  <h3>LUXAXES</h3>
          <p class="price">
            {{ Intl.NumberFormat('fr', {
              style: 'currency',
              currency: 'XOF'
            }).format(price)
              .replace(/&nbsp;/gi, ' ') }}  
          </p>          
          <nuxt-link :to="path" class="product-button text">Commander</nuxt-link>			
			  </div>        
      </nuxt-link>        
      </box>      
    </grid>
    <article>      
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
  methods: {
    getProducts: function() {
      return this.$store.state.products.filter(
        ({ activity }) => activity === this.title
      )
    }
  },
  components: {
    Grid,
    Box,
    LazyImage
  }
}
</script>

<style scoped>
.products-list {
  padding-bottom: 3.25em;
}
</style>
