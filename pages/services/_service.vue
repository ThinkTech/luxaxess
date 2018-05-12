<template>
  <main class="container">
    <lazy-image :image="require(`~/static${image}`)" :alt="title" class="banner full" />
    <article>      
      <h1 class="headline">{{ title }}</h1>
      <h2>{{ description }}</h2>
    </article>        
    <grid :col="{tablet:2, laptop: getRelatedActivities().length}" gap="0em" class="services full">
      <box v-for="{title, description, path, image} in getRelatedActivities()" :key="title" class="picture caption zoomIn">                
      <nuxt-link :to="path">
        <lazy-image :image="require(`~/static${image}`)" :alt="title"/>        
        <h1 class="text subhead">{{ title.toUpperCase() }}</h1>
        <h2>{{ title.toUpperCase() }}</h2>                                  
        <div class = "details">
				  <h3>LUXAXES</h3>				
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
    const service = await import('~/content/services/' +
      params.service +
      '.json')
    return service
  },
  methods: {
    getRelatedActivities: function() {
      return this.$store.state.activities.filter(
        ({ service }) => service === this.title
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
