<script>
  import white from '../../images/SVG/navbar/white.svg'
  import black from '../../images/SVG/navbar/black.svg'
  import trad from '../../images/SVG/navbar/trad.svg'
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