<template>
  <div>
    <site-header/>
    <nuxt/>
    <grid :col="$mq | mq({phone: 1, tablet:2, laptop:4})" gap="0em" class="services full">
      <box>
        <img src="../assets/images/interior.jpg" alt="" />
        <h1 class="subhead">PROPERTIES</h1>        
      </box>
      <box>
        <img src="../assets/images/b1.jpg" alt="" />
        <h1 class="subhead">FACILITIES</h1>        
      </box>
      <box>
        <img src="../assets/images/interior.jpg" alt="" />
        <h1 class="subhead">BUSINESS OPPORTUNITIES</h1>        
      </box>
      <box>
        <img src="../assets/images/b1.jpg" alt="" />
        <h1 class="subhead">BOUTIQUE</h1>        
      </box>  
    </grid>
    <site-footer/>
  </div>
</template>

<script>
import { Grid, Box } from '../components/GridBox'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
export default {
  components: {
    Grid,
    Box,
    SiteHeader: Header,
    SiteFooter: Footer
  }
}
</script>
