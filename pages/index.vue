<template>
  <main class="container">
    <div class="slider full">
      <no-ssr>
        <agile :speed="300" timing="linear" :fade="true" :autoplay="true">
          <grid :col="2" class="slide">            
            <box>
              <lazy-image :image="require(`~/static${$store.state.homeSettings.image}`)" :alt="$store.state.settings.site" />
            </box>                        
            <box class="slide-content">
              <h1 class="headline">LUX<span class="logo-span">A</span>XES</h1>
              <h2 class="subhead">Le luxe accessible</h2>
              <p class="content">{{ $store.state.homeSettings.content }}</p>
              <nuxt-link to="/about" class="button" href="">Decouverte →</nuxt-link>
            </box>
          </grid>            
          <grid :col="2" class="slide" v-for="{title, description, path, image} in $store.state.services" :key="title" >            
            <box>
              <lazy-image :image="require(`~/static${image}`)" :alt="title" />
            </box>                        
            <box class="slide-content">
              <h1 class="headline">LUX<span class="logo-span">A</span>XES</h1>
              <h2 class="subhead">{{ title.toUpperCase() }}</h2>
              <p class="content">{{ description }}</p>
              <nuxt-link :to="path" class="button" href="">Decouverte →</nuxt-link>
            </box>
          </grid>            
        </agile>
      </no-ssr>
    </div>
     <grid :col="{laptop: 2}" class="products full" v-if="getCoverProduct()">
      <box>
        <grid :col="{laptop: 2}">
          <box>
            <lazy-image :image="require(`~/static${getCoverProduct().image}`)" :alt="getCoverProduct().title" class="products-image-box" />
          </box>
          <box class="product">
            <h1>{{ getCoverProduct().title }}</h1>
            <h2 class="price">{{ getCoverProduct().price | currency }}</h2>
            <p>{{ getCoverProduct().description }}</p>          
            <nuxt-link :to="getCoverProduct().path" class="product-button">Commander</nuxt-link>
          </box>
        </grid>
      </box>
      <box>
        <lazy-image :image="require(`~/static${getCoverActivity().image}`)" :alt="getCoverActivity().title" class="products-image-box tall" />
      </box>
    </grid>
    <section class="cards full" v-if="getFeaturedProducts().length === 4">
      <grid :col="{tablet: 2, pad:4}" gap="1.625em">
        <box v-for="({title, description, path}) in getFeaturedProducts()" :key="title" class="card">
          <grid gap="1.625em">
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
    <section class="grid1">
      <div class="img1"></div>
      <div class="img2"></div>
      <div class="strapline">
        <blockquote>“Quand on ne peut pas changer le monde, il faut changer le décor.”</blockquote>
      </div>
      <div class="img3"></div>
      <div class="cta-wrapper">
        <div class="cta">
          <h1>Luxaxes</h1>
          <p>Vous avez craqué sur notre collection Accessoire Salle de Bain ? Voilà exactement la deco design qu’il vous faut pour moderniser votre foyer.</p>
          <a class="button" href="/contact">Passez votre commande →</a>
        </div>
      </div> 
    </section>
    <grid :col="{pad: 2}" class="promo full" v-if="$store.state.services.length">
      <box>
        <lazy-image :image="require(`~/static${$store.state.services[0].image}`)" :alt="$store.state.services[0].title" />
      </box>
      <box class="promo-content">
        <h1 class="headline">{{ $store.state.services[0].title }}</h1>
        <p class="content">{{ $store.state.services[0].description }}</p>
        <h2 v-for="({title, path}) in relatedActivities($store.state.services[0].title)" :key="title" class="subhead">
          <nuxt-link :to="path">{{ title.toUpperCase() }}</nuxt-link>
        </h2>        
      </box>
    </grid>
    <grid :col="{tablet:3}" gap="0em" class="services full" v-if="$store.state.services.length">
      <box v-for="({title, path, image}, index) in $store.state.services" :key="title" v-if="index > 0" class="picture sepia">
        <nuxt-link :to="path">
          <lazy-image :image="require(`~/static${image}`)" :alt="title" />
          <h1 class="subhead">{{ title.toUpperCase() }}</h1>
        </nuxt-link>
      </box>   
    </grid>
  </main>
</template>

<script>
import LazyImage from '~/components/Image/LazyImage.vue'
import { Grid, Box } from '~/components/GridBox'
export default {
  layout: 'index',
  methods: {
    relatedActivities: function(relatedService) {
      return this.$store.state.activities.filter(
        ({ service }) => service === relatedService
      )
    },
    getCoverProduct: function() {
      return this.$store.state.products.find(
        ({ title }) => title === this.$store.state.homeSettings.product
      )
    },
    getCoverActivity: function() {
      return this.$store.state.activities.find(
        ({ title }) => title === this.getCoverProduct().activity
      )
    },
    getFeaturedProducts: function() {
      return this.$store.state.products
        .filter(({ title }) => title !== this.getCoverProduct().title)
        .slice(3)
    }
  },
  filters: {
    currency: function(price) {
      return Intl.NumberFormat('fr', {
        style: 'currency',
        currency: 'XOF'
      })
        .format(price)
        .replace(/&nbsp;/gi, ' ')
    }
  },
  components: {
    Grid,
    Box,
    LazyImage
  }
}
</script>

<style>
.logo-span {
  color: #222;
}
.products {
  background: black;
  /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 3.25em)); */
  padding: 3.25em 0;
}
.products-image-box {
  object-fit: cover;
  width: 100%;
  height: 16.25em;
}
.tall {
  height: 24.375em;
}

.slide {
  text-align: center;
}
.slide .headline {
  font-family: 'Clear sans', serif;
}
.slide .subhead {
  color: #222;
}
.slide-content {
  padding: 1.625em 1.625em 0.40625em 0;
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.slide .content {
  display: none;
}
@media (min-width: 520px) {
  /* tablet*/
  .slide .content {
    max-width: 32vw;
    display: block;
    font-size: 125%;
  }
}
.slide img {
  z-index: 1;
  mix-blend-mode: hard-light;
  height: 100%;
  width: 100%;
  object-fit: cover;
  clip-path: polygon(0 0, 75% 0, 100% 100%, 0 100%);
}
blockquote {
  font: 1.1em/2 'Aleo', serif;
  font-style: italic;
  margin: 0 0 2em 0;
}

.img1 {
  /* could use `object-fit: cover;` on an img, but tricky*/
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/wooden.jpg);
  background-size: cover;
}

.img2 {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/speaker.jpg);
  background-size: cover;
}

.img3 {
  /* https://elements.envato.com/gradient-network-wave-backgrounds-L5PGKP */
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/waves.jpg);
  background-size: cover;
}

.strapline::before {
  content: '';
  display: block;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/wavy.svg)
    repeat-x;
  background-size: cover;
  width: 20%;
  height: 0.5em;
  position: absolute;
  top: -3em;
  left: 40%;
}

.cta h1 {
  font: bold 4em/1 'Aleo', serif;
  margin: 0 0 20px 0;
  position: relative;
}

/* grid */

.grid1 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 20px;
  mix-blend-mode: hard-light;
}

.img2 {
  height: 400px;
}

.strapline {
  margin-top: 100px;
  position: relative;
}

@media only screen and (min-width: 750px) {
  .grid1 {
    grid-template-columns: 3fr 6fr 1fr 5fr 10fr 2fr;
    grid-template-rows: 100px auto 15px auto auto;
    padding: 0;
  }

  .img1 {
    grid-column: 1 / 3;
    grid-row: 2 / 5;
  }

  .img2 {
    grid-column: 2 / 4;
    grid-row: 3 / 6;
  }

  .img3 {
    grid-column: 5 / 7;
    grid-row: 4 / 6;
  }

  .strapline {
    grid-column: 3 / 6;
    grid-row: 2 / 3;

    padding: 0 16%;
    text-align: center;
    margin: 0;
  }

  .cta-wrapper {
    grid-column: 4 / 6;
    grid-row: 4 / 6;
  }

  .cta {
    padding: 100px 0 100px 10%;
  }

  .cta h1 {
    font-size: 6em;
  }

  .button {
    width: auto;
  }
}

@media only screen and (min-width: 1100px) {
  .cta {
    padding: 100px 0 100px 20%;
  }

  .cta h1::before {
    content: '';
    display: block;
    height: 1em;
    width: 1em;
    /* https://elements.envato.com/retro-badges-7B35YA */
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/badge.svg)
      no-repeat center center;
    background-size: 80%;
    position: absolute;
    left: -120px;
    top: 0;
  }
}
</style>
