<template>
  <div>
    <site-header/>
    <nuxt/>    
    <site-footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
export default {
  components: {
    SiteHeader: Header,
    SiteFooter: Footer
  }
}
</script>
