<script>
	import { page } from '$app/stores';
  import white from '../../images/white.svg'
  import black from '../../images/black.svg'
  import trad from '../../images/trad.svg'
</script>

<navbar class="navbar">
  <div class="theme-container">
    <img src={black} alt="Black">
  </div>
  <div class="txt-container">
        <a href="/">/Qui suis-je</a>
        <a href="/portfolio">/Portfolio</a>
        <a href="/infos">/Informations</a>
  </div>
  <div class="trad-container">
    <img src={trad} alt="Traduction">
  </div>
</navbar>

<style>
  @import './Navbar.css';
</style>