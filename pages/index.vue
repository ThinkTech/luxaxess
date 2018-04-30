<template>
  <main class="container">
    <div class="slider full">
      <no-ssr>
        <agile :speed="750" :timing="'linear'" :fade="true" :autoplay="true">
          <grid :col="2" class="slide">            
            <box>
              <img src="~/assets/images/house.jpg" alt="">
            </box>                        
            <box class="slide-content">
              <h1 class="headline">LUXAXES</h1>
              <h2 class="subhead">Le luxe accessible</h2>
              <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus libero, blandit at risus in, interdum dignissim risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
              <a class="button" href="">Passez votre commande →</a>
            </box>
          </grid>            
          <grid :col="2" class="slide">            
            <box>
              <img src="~/assets/images/interior.jpg" alt="">
            </box>                        
            <box class="slide-content">
              <h1 class="headline">LUXAXES</h1>
              <h2 class="subhead">BUSINESS OPPORTUNITIES</h2>
              <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus libero, blandit at risus in, interdum dignissim risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
              <a class="button" href="">Passez votre commande →</a>
            </box>
          </grid>            
        </agile>
      </no-ssr>
    </div>
     <grid :col="$mq | mq({phone: 1, laptop: 2})" class="products full">
      <box>
        <grid :col="$mq | mq({phone: 1, laptop: 2})">
          <box>
            <img src="~/assets/images/interior.jpg" alt="" class="products-image-box" />
          </box>
          <box class="product">
            <h1>Adipiscing elit sed do eiusmod tempor</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde doloremque laudantium.</p>          
            <a class="product-button">Decouvrir</a>
          </box>
        </grid>
      </box>
      <box>
        <img src="~/assets/images/b1.jpg" alt="" class="products-image-box tall" />
      </box>
    </grid>
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
          <a class="button" href="">Passez votre commande →</a>
        </div>
      </div> 
    </section>
    <grid :col="$mq | mq({phone: 1, pad: 2})" class="promo full">
      <box>
        <img src="~/assets/images/house.jpg" alt="" />
      </box>
      <box class="promo-content">
        <h1 class="headline">Business opportinities</h1>
        <h2 class="subhead">MOBILIER</h2>
        <h2 class="subhead">INTERIEUR</h2>
        <p class="content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde doloremque laudantium.</p>
        <a class="product-button">Decouvrir</a>
      </box>
    </grid>
    <grid :col="$mq | mq({phone: 1, tablet:3})" gap="0em" class="services full">
      <box>
        <img src="~/assets/images/interior.jpg" alt="" />
        <h1 class="subhead">RENOVATION</h1>        
      </box>
      <box>
        <img src="~/assets/images/b1.jpg" alt="" />
        <h1 class="subhead">DECOR</h1>        
      </box>
      <box>
        <img src="~/assets/images/interior.jpg" alt="" />
        <h1 class="subhead">BUSINESS</h1>        
      </box>   
    </grid>
  </main>
</template>

<script>
import { Grid, Box } from '~/components/GridBox'
export default {
  layout: 'index',
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/blog/posts/', false, /\.json$/)

    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }))

    return {
      posts
    }
  },
  components: {
    Grid,
    Box
  }
}
</script>

<style>
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
.content {
  max-width: 32em;
}
.slide img {
  z-index: 1;
  mix-blend-mode: hard-light;
  height: 100%;
  width: 100%;
  object-fit: cover;
  clip-path: polygon(0 0, 75% 0, 100% 100%, 0 100%);
}
.promo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.promo-content {
  padding: 3.25em 0.8125em;
  text-align: center;
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

.button {
  display: inline-block;
  color: white;
  background: #222;
  padding: 0.8em 1.5em;
  width: 100%;
  text-align: center;
  margin: 1.625em auto;
}

.button:hover {
  background: black;
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
