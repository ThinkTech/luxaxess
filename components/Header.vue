<template>
  <header class="container">
    <nuxt-link to="/" class="logo">
      <h1>Luxaxes</h1>
    </nuxt-link>
    <div class="menu">
        <input type="checkbox" id="nav-toggle">
        <label for="nav-toggle"><span class="toggle">☰</span></label>       
        <nav class="nav">
          <ul>
            <li><nuxt-link to="/">Accueil</nuxt-link></li>
            <li><a>Properties</a></li>
            <li><a>Facilities</a></li>
            <li><a>Business opportunities</a></li>
            <li><a>Boutique</a></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
          </ul>
        </nav>      
    </div>
  </header>
</template>


<style scoped>
header {
  position: sticky;
  top: 0;
  background: black;
  z-index: 99999;
  box-shadow: 0.1em 0.08125em 1px #1d1b1b;
  display: flex;
  padding: 0.8125em;
}
.logo h1 {
  margin: 0;
  padding: 0.203125em 0;
  display: inline-flex;
}
.menu {
  position: absolute;
  top: 0.40625em;
  right: 0;
  display: inline-block;
}

#nav-toggle {
  position: absolute;
  opacity: 0;
  display: none;
}

nav {
  position: fixed;
  text-align: center;
  right: -100%;
  top: 0;
  height: 100%;
  width: 250px;
  background-color: #111;
  transition: 0.53s transform;
  transition-timing-function: cubic-bezier(0.38, 0.52, 0.37, 1);
}
nav ul {
  display: flex;
  flex-direction: column;
}
nav ul li {
  padding: 0.8125em 1.625em;
  background: #111;
  border-bottom: 1px solid #000;
}
nav ul li a {
  font-weight: 900;
  color: white;
}
nav ul li a:hover {
  color: white;
}
#nav-toggle ~ label {
  display: block;
  transition: 0.5s transform;
  transition-timing-function: cubic-bezier(0.38, 0.52, 0.37, 1.27);
  color: white;
  font-size: 200%;
  font-weight: 900;
  background: #000;
  padding: 0.203125em 0.40625em;
  line-height: 1.3125em;
  cursor: pointer;
}

#nav-toggle:checked ~ label {
  transform: translateX(-250px);
}
#nav-toggle:checked ~ label::before {
  content: 'x';
}
#nav-toggle:checked ~ label .toggle {
  display: none;
}
#nav-toggle:checked ~ nav {
  transform: translateX(-94vw);
}

@media (min-width: 960px) {
  header {
    padding: 0;
  }
  .logo h1 {
    margin: 0 10vw 0 1.625em;
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
  }
  nav ul {
    flex-direction: row;
  }
}
</style>
