<template>
  <footer class="container">    
    <grid :col="{ phone: 2, pad: 4 }" gap="3.25em">
      <box>
        <h2>{{ $store.state.settings.site }}</h2>
        <ul>
          <li v-for="({title,path}, index) in $store.state.cmsPages" :key="title" v-if="index < 4">
            <nuxt-link :to="path">{{ title }}</nuxt-link>
          </li>          
        </ul>
      </box>
      <box>
        <h2>Nos services</h2>
        <ul>
          <li v-for="{title,path} in $store.state.services" :key="title">
            <nuxt-link :to="path">{{ title.toUpperCase() }}</nuxt-link>
          </li>         
        </ul>
      </box>
      <box>
        <h2>Horaires</h2>
        <ul>
          <li>LUNDI AU VENDREDI</li>
          <li>{{ this.$store.state.settings.weekdays }}</li>
          <li>SAMEDI</li>
          <li>{{ this.$store.state.settings.saturday }}</li>
        </ul>
      </box>
      <box>
        <h2>Contact</h2>
        <ul>
          <li>
            <address class="footer-address">{{ $store.state.settings.address }}</address>
          </li>
          <li>{{ $store.state.settings.email }}</li>
          <li>{{ $store.state.settings.tel }}</li>
        </ul>
      </box>
    </grid>
    <section class="footer-social-section flex-rw">
        <span class="footer-social-overlap footer-social-connect">
        RESTEZ <span class="footer-social-small">en</span> CONTACT
        </span>
        <span class="footer-social-overlap footer-social-icons-wrapper">
        <a target="_blank" rel="noopener noreferrer" title="Pinterest" itemprop="significantLink"><i class="fa fa-pinterest"></i></a>
        <a target="_blank" rel="noopener noreferrer" title="Facebook" itemprop="significantLink"><i class="fa fa-facebook"></i></a>
        <a target="_blank" rel="noopener noreferrer" title="Twitter" itemprop="significantLink"><i class="fa fa-twitter"></i></a>
        <a target="_blank" rel="noopener noreferrer" title="Instagram" itemprop="significantLink"><i class="fa fa-instagram"></i></a>
        <a target="_blank" rel="noopener noreferrer" title="Youtube" itemprop="significantLink"><i class="fa fa-youtube"></i></a>
        <a target="_blank" rel="noopener noreferrer" title="Google Plus" itemprop="significantLink"><i class="fa fa-google-plus"></i></a>
        </span>
    </section>
    <section class="footer-bottom-section flex-rw">
      <div class="footer-bottom-wrapper">   
        <i class="fa fa-copyright">        
        </i> 2018 {{ $store.state.settings.site }} <span class="footer-bottom-rights"> - Tous droits reserves - </span>
      </div>
      <div class="footer-bottom-wrapper">
        <nuxt-link :to="$store.state.cmsPages[$store.state.cmsPages.length - 2].path">{{ $store.state.cmsPages[$store.state.cmsPages.length-2].title }}</nuxt-link>
         | 
        <nuxt-link :to="$store.state.cmsPages[$store.state.cmsPages.length - 1].path">{{ $store.state.cmsPages[$store.state.cmsPages.length-1].title }}</nuxt-link>
      </div>
    </section>
  </footer>
</template>

<script>
import { Grid, Box } from '../components/GridBox'
export default {
  data() {
    return {
      cmsPages: this.$store.state.cmsPages.sort(
        ({ position: position1 = 1 }, { position: position2 = 2 }) =>
          position1 - position2
      )
    }
  },
  components: {
    Grid,
    Box
  }
}
</script>

<style scoped>
footer {
  padding-top: 3.25em;
  background: black;
  color: white;
  text-align: center;
}
h2 {
  text-transform: uppercase;
}
a,
a:visited {
  color: #afd8ea;
}

a:hover {
  color: #ccc;
}

.flex-rw {
  display: flex;
  flex-flow: row wrap;
}

.footer-social-section {
  width: 100%;
  align-items: center;
  justify-content: space-around;
  position: relative;
  margin-top: 0.8125em;
  font-size: 175%;
}

.footer-social-section::after {
  content: '';
  position: absolute;
  z-index: 1;
  top: 50%;
  border-top: 1px solid #ccc;
  width: 100%;
}

.footer-social-overlap {
  position: relative;
  z-index: 2;
  background: black;
  padding: 0 20px;
}

.footer-social-connect {
  display: flex;
  align-items: center;
  font-family: 'Aleo', serif;
}

.footer-social-small {
  font-size: 0.6em;
  padding: 0px 20px;
}

.footer-social-overlap > a:not(:first-child) {
  margin-left: 0.38em;
}

.footer-bottom-section {
  width: 100%;
  padding: 10px;
  border-top: 1px solid #ccc;
  margin-top: 10px;
}

.footer-bottom-section > div:first-child {
  margin-right: auto;
}

.footer-bottom-wrapper {
  font-size: 80%;
  margin: 0 auto;
}

.footer-address {
  display: inline;
  font-style: normal;
}
</style>
