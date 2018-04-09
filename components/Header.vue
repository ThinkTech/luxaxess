<template>
  <header class="container">
    <nav>
      <a>
        <img src="../assets/images/logo.jpg" alt="luxaxess" />
      </a>
      <ul>
        <li><a>Accueil</a></li>
        <li><a>MOBILIER</a></li>
        <li><a>DECOR</a></li>
        <li><a>VEHICULES</a></li>
        <li><a>ACCESSOIRES</a></li>
        <li><a>CONTACT</a></li>
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
  background: #d2a661;
  border-left: 1px solid #d6b888;
}
nav ul li a {
  font-weight: 900;
  text-transform: uppercase;
  color: #0b84b9;
}
nav ul li a:hover {
  color: white;
}
</style>
