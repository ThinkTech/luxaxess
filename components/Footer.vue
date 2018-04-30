<template>
  <footer class="container">    
    <grid :col="$mq | mq({ phone: 2, pad: 4 })" gap="3.25em">
      <box>
        <h2>Luxaxes</h2>
        <ul>
          <li><a>À propos de Luxaxes</a></li>
          <li><a>Nos engagements</a></li>
          <li><a>Consultez notre brochure</a></li>
          <li><a>Service Après-Vente</a></li>
        </ul>
      </box>
      <box>
        <h2>Nos services</h2>
        <ul>
          <li><a>DECORATION</a></li>
          <li><a>IMMOBILIER</a></li>
          <li><a>VEHICULES</a></li>
          <li><a>ACCESSOIRES</a></li>
        </ul>
      </box>
      <box>
        <h2>Horaires</h2>
        <ul>
          <li>LUNDI AU VENDREDI</li>
          <li>08 h 00-17 h 00</li>
          <li>SAMEDI</li>
          <li>09 h 00-15 h 00</li>
        </ul>
      </box>
      <box>
        <h2>Contact</h2>
        <ul>
          <li>Sacre coeur en face cite police, Dakar-Senegal</li>
          <li>info@luxaxes.com</li>
          <li>33 800 00 00</li>
        </ul>
      </box>
    </grid>
    <section class="footer-social-section flex-rw">
        <span class="footer-social-overlap footer-social-connect">
        RESTEZ <span class="footer-social-small">en</span> CONTACT
        </span>
        <span class="footer-social-overlap footer-social-icons-wrapper">
        <a target="_blank" title="Pinterest" itemprop="significantLink"><i class="fa fa-pinterest"></i></a>
        <a target="_blank" title="Facebook" itemprop="significantLink"><i class="fa fa-facebook"></i></a>
        <a target="_blank" title="Twitter" itemprop="significantLink"><i class="fa fa-twitter"></i></a>
        <a target="_blank" title="Instagram" itemprop="significantLink"><i class="fa fa-instagram"></i></a>
        <a target="_blank" title="Youtube" itemprop="significantLink"><i class="fa fa-youtube"></i></a>
        <a target="_blank" title="Google Plus" itemprop="significantLink"><i class="fa fa-google-plus"></i></a>
        </span>
    </section>
    <section class="footer-bottom-section flex-rw">
      <div class="footer-bottom-wrapper">   
        <i class="fa fa-copyright" role="copyright">        
        </i> 2018 Luxaxes <address class="footer-address" role="company address">Sacre coeur, Dakar</address><span class="footer-bottom-rights"> - Tous droits reserves - </span>
      </div>
      <div class="footer-bottom-wrapper">
        <a rel="nofollow">Conditions de vente</a> | <a rel="nofollow">Mentions légales</a>
      </div>
    </section>
  </footer>
</template>

<script>
import { Grid, Box } from '../components/GridBox'
export default {
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
