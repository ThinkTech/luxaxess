<template>
  <div>
    <site-header/>
    <nuxt/>
    <grid :col="{tablet:2, laptop:4}" gap="0em" class="services full">
      <box v-for="{title, path, image} in $store.state.services" :key="title" class="picture sepia">                
        <nuxt-link :to="path">
          <lazy-image :image="require(`~/static${image}`)" :alt="title" />
          <h1 class="subhead">{{ title.toUpperCase() }}</h1>
        </nuxt-link>                
      </box>      
    </grid>
    <site-footer/>
  </div>
</template>

<script>
import { Grid, Box } from '~/components/GridBox'
import LazyImage from '~/components/Image/LazyImage.vue'
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
export default {
  components: {
    Grid,
    Box,
    LazyImage,
    SiteHeader: Header,
    SiteFooter: Footer
  }
}
</script>
