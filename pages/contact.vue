<template>
  <main class="container">
    <img src="../assets/images/b1.jpg" alt="" class="banner full" />
    <form id="contact" action="" method="post">
      <h1>CONTACTEZ-NOUS</h1>
      <fieldset>
        <input placeholder="Votre nom" type="text" required>
      </fieldset>
      <fieldset>
        <input placeholder="Votre addresse email" type="email" required>
      </fieldset>
      <fieldset>
        <input placeholder="Tel." type="tel">
      </fieldset>          
      <fieldset>
        <textarea placeholder="Votre message ici...." required></textarea>
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">ENVOYER</button>
      </fieldset>
    </form>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
#contact {
  background: #2f2f2fbf;
  padding: 3.25em;
  margin: 3.25em auto;
  width: 100%;
  max-width: 520px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

fieldset {
  border: medium none !important;
  margin: 0 0 1.625em;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input,
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  margin: 0 0 0.8125em;
  padding: 0.8125em;
  font-size: 100%;
}

#contact input:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type='submit'] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #ea1d35;
  color: #fff;
  margin: 0 0 0.8125em;
  padding: 0.125em;
  font-size: 300%;
  font-family: Mistral, 'Shadows Into Light';
  text-align: center;
}

#contact button[type='submit']:hover {
  background: #ea1d35bf;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#contact button[type='submit']:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}
</style>


<script>
import { Grid, Box } from '../components/GridBox'
import Header from '../components/Header.vue'
export default {
  scrollToTop: true,
  layout: 'page',
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
main {
  min-height: 100vh;
  background: #111;
  color: white;
}
</style>
