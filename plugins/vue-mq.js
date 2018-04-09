import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    phone: 520,
    tablet: 750,
    pad: 960,
    laptop: 1280,
    desktop: 1920,
    large: Infinity
  }
})
