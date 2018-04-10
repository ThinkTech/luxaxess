<template>
  <header class="container">
    <nav>
      <a>
        <img src="../assets/images/logo.jpg" alt="luxaxess" />
      </a>
      <ul>
        <li><a>Accueil</a></li>
        <li><a>Properties</a></li>
        <li><a>Facilities</a></li>
        <li><a>Business opportunities</a></li>
        <li><a>Boutique</a></li>
        <li><a>Contact</a></li>
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
img {
  height: 3.25em;
  padding: 0.203125em 0;
}
nav ul {
  display: inline-flex;
  margin-left: 12em;
}
nav ul li {
  padding: 0.8125em 1.625em;
  background: #a91414;
  border-left: 1px solid #bb1111;
}
nav ul li a {
  font-weight: 900;
  color: white;
}
nav ul li a:hover {
  color: white;
}
</style>
