<template>
  <main class="container">
    <lazy-image :image="require(`~/static${image}`)" :alt="title" class="banner full" />
    <article>
      <h1 class="headline">{{ title }}</h1>
      <h2 class="price">{{ Intl.NumberFormat('fr', {
        style: 'currency',
        currency: 'XOF'
      }).format(price)
        .replace(/&nbsp;/gi, ' ') }}</h2>
      <h3>{{ description }}</h3>
      <p>{{ content }}</p>
      <lazy-image :image="require(`~/static${image}`)" :alt="title" />         
    </article>
    <grid :col="$mq | mq({phone: 1, pad: images.length})" class="promo full" v-if="images.length">
      <box v-for="({image}, index) in images" :key="image">
        <lazy-image :image="require(`~/static${image}`)" :alt="`${title}-${index+1}`" />
      </box>
    </grid>
    <div class="actions">
      <a class="button" href="/contact">Passez votre commande →</a>
    </div>
    <h3 class="subhead" v-if="getRelatedProducts().length">VOUS AIMEREZ AUSSI</h3>
    <section class="cards full" v-if="getRelatedProducts().length">
      <grid :col="$mq | mq({phone: 1, tablet: 2, pad:4})" gap="1.625em">
        <box v-for="({title, description, path}) in getFeaturedProducts()" :key="title" class="card">
          <grid :col="$mq | mq({phone: 1})" gap="1.625em">
            <box>
              <lazy-image :image="require(`~/static${path}`)" :alt="title" class="products-image-box" />
            </box>
            <box class="product">             
              <h2>{{ title }}</h2>
              <h3 class="price">{{ price | currency }}</h3>
              <p>{{ description }}</p>
              <nuxt-link :to="path" class="product-button">Commander</nuxt-link>
            </box>
          </grid>
        </box>        
      </grid>
    </section>
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
    const product = await import('~/content/products/' +
      params.product +
      '.json')
    return product
  },
  methods: {
    getRelatedProducts: function() {
      return this.$store.state.products
        .filter(({ title }) => title !== this.title)
        .slice(3)
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
.actions {
  text-align: center;
}
.button {
  margin: 3.25em auto 1.625em;
}
</style>
