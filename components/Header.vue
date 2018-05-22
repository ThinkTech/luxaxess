<template>
  <header class="container">
    <nuxt-link to="/" class="logo">
      <h1>LUX<span class="logo-span">A</span>XES</h1>
      <h2 class="subhead">Le luxe accessible</h2>
    </nuxt-link>
    <div class="menu">
        <input type="checkbox" id="nav-toggle">
        <label for="nav-toggle"><span class="toggle">☰</span></label>       
        <nav class="nav">
          <ul>
            <li>
              <nuxt-link to="/">Accueil</nuxt-link>
            </li>
            <li v-for="{title:service,path} in $store.state.services" :key="service">
              <nuxt-link :to="path">{{ service }}</nuxt-link>
              <span>ˇ</span>
              <ul>
                <li v-for="{title:activity,path} in getActivities(service)" :key="activity">
                  <nuxt-link :to="path">{{ activity }}</nuxt-link>
                </li>
              </ul>
            </li>            
            <li>
              <nuxt-link to="/contact">Contact</nuxt-link>
            </li>
          </ul>
        </nav>      
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    getActivities: function(relatedService) {
      return this.$store.state.activities.filter(
        ({ service }) => service === relatedService
      )
    }
  }
}
</script>


<style scoped>
header {
  position: fixed;
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  background: black;
  z-index: 99999;
  box-shadow: 0.1em 0.08125em 1px #1d1b1b;
  display: flex;
  padding: 0.125em 0.8125em 0.8125em;
}
.logo h1 {
  margin: 0;
  padding: 0;
  display: inline-flex;
  font-family: 'Clear sans', serif;
  font-weight: 350;
}
.logo-span {
  color: #ea1d35;
}
.subhead {
  position: relative;
  bottom: 0.36125em;
  left: -0.36125em;
  font-size: 120%;
}
.menu {
  position: absolute;
  top: 0.40625em;
  right: 0;
  display: inline-block;
  z-index: 99999999;
}

#nav-toggle {
  position: absolute;
  opacity: 0;
  display: none;
}

nav {
  position: fixed;
  text-align: center;
  right: -100vw;
  top: 0;
  height: 100%;
  width: 250px;
  background-color: #111;
  transition: 0.53s transform;
  transition-timing-function: cubic-bezier(0.38, 0.52, 0.37, 1);
  z-index: 9999999999999;
}
nav ul {
  display: flex;
  flex-direction: column;
  padding-top: 1.625em;
}
nav ul li {
  padding: 0.8125em 1em;
  background: #111;
  border-bottom: 1px solid #000;
  position: relative;
}
nav ul li > span {
  font-size: 265%;
  line-height: 0;
  position: relative;
  top: 0.5em;
  left: 0.08125em;
}
nav ul li > ul {
  display: none;
}
nav ul li:hover > ul {
  display: block;
  padding: 0;
  z-index: 99999999;
}
nav ul li a {
  font-weight: 300;
  color: white;
}
nav ul li a:hover {
  color: #ea1d35;
}
#nav-toggle ~ label {
  display: block;
  transition: 0.5s transform;
  transition-timing-function: cubic-bezier(0.38, 0.52, 0.37, 1.27);
  color: white;
  font-size: 200%;
  font-weight: 900;
  background: #000;
  padding: 0 0.40625em;
  line-height: 1.3125em;
  cursor: pointer;
}
#nav-toggle:checked ~ label::before {
  content: 'x';
}
#nav-toggle:checked ~ label .toggle {
  display: none;
}
#nav-toggle:checked ~ label {
  transform: translate3d(-260px, 0, 0) rotate(180deg);
  background: white;
  color: #000;
  border-radius: 8px;
  line-height: 1.3em;
  padding: 0.4em 0.2em -0.2em;
}

#nav-toggle:checked ~ nav {
  transform: translate3d(-100vw, 0, 0);
  box-shadow: -55px 13px 77px 90vw rgba(0, 0, 0, 0.47);
}

@media (min-width: 960px) {
  header {
    padding: 0;
    justify-content: flex-end;
  }
  .logo {
    position: absolute;
    top: 0;
    left: 0.8125em;
  }
  .menu {
    position: static;
  }
  #nav-toggle ~ label {
    display: none;
  }
  nav,
  #nav-toggle:checked ~ nav {
    position: static;
    transform: none;
    width: 100%;
    height: auto;
    box-shadow: none;
  }
  nav ul {
    flex-direction: row;
    padding-top: 0;
  }
  nav ul li {
    border-right: 1px solid #000;
  }
  nav ul li:hover > ul {
    position: absolute;
    width: 16em;
    left: 0;
  }
}
@media (min-width: 1024px) {
  header {
    justify-content: center;
  }
}
</style>
