<template>
  <main class="container">
    <img src="~/assets/images/b1.jpg" alt="" class="banner full" />
    <article>
      <h1 class="headline">{{ title }}</h1>
      <p>{{ body }}</p>
    </article>
    <section class="cards full">
      <grid :col="$mq | mq({phone: 1, tablet: 2, pad:4})" gap="1.625em">
        <box class="card">
          <grid :col="$mq | mq({phone: 1})" gap="1.625em">
            <box>
              <img src="~/assets/images/interior.jpg" alt="" class="products-image-box" />
            </box>
            <box class="product">             
              <h2>Adipiscing elit sed do eiusmod tempor</h2>
              <a class="product-button">Decouvrir</a>
            </box>
          </grid>
        </box>
        <box class="card">
          <grid :col="$mq | mq({phone: 1})" gap="1.625em">
            <box>
              <img src="~/assets/images/interior.jpg" alt="" class="products-image-box" />
            </box>
            <box class="product">             
              <h2>Adipiscing elit sed do eiusmod tempor</h2>
              <a class="product-button">Decouvrir</a>
            </box>
          </grid>
        </box>
        <box class="card">
          <grid :col="$mq | mq({phone: 1})" gap="1.625em">
            <box>
              <img src="~/assets/images/interior.jpg" alt="" class="products-image-box" />
            </box>
            <box class="product">             
              <h2>Adipiscing elit sed do eiusmod tempor</h2>
              <a class="product-button">Decouvrir</a>
            </box>
          </grid>
        </box>
        <box class="card">
          <grid :col="$mq | mq({phone: 1})" gap="1.625em">
            <box>
              <img src="~/assets/images/interior.jpg" alt="" class="products-image-box" />
            </box>
            <box class="product">             
              <h2>Adipiscing elit sed do eiusmod tempor</h2>
              <a class="product-button">Decouvrir</a>
            </box>
          </grid>
        </box>
      </grid>
    </section>
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
    const service = await import('~/content/services/' + params.slug + '.json')
    return service
  },
  components: {
    Grid,
    Box
  }
}
</script>

<style>
article {
  padding: 1.625em 0.8125em;
}
</style>
