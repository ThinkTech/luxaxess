<template>
  <header class="container">
    <nav>
      <nuxt-link to="/" class="logo">
        <h1>Luxaxes</h1>
      </nuxt-link>
      <ul>
        <li><nuxt-link to="/">Accueil</nuxt-link></li>
        <li><a>Properties</a></li>
        <li><a>Facilities</a></li>
        <li><a>Business opportunities</a></li>
        <li><a>Boutique</a></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>


<style scoped>
header {
  position: sticky;
  top: 0;
  background: black;
  z-index: 99999;
  box-shadow: 0.1em 0.08125em 1px #1d1b1b;
}
.logo h1 {
  margin: 0;
  padding: 0.203125em 0;
  display: inline-block;
}
nav ul {
  display: inline-flex;
  margin-left: 12em;
}
nav ul li {
  padding: 0.8125em 1.625em;
  background: #111;
  border-left: 1px solid #000;
}
nav ul li a {
  font-weight: 900;
  color: white;
}
nav ul li a:hover {
  color: white;
}
</style>
