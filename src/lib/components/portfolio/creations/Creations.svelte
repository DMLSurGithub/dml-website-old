<script>
  import web from '../../../images/IMG/web.png'
  import securebits from '../../../images/IMG/crea/securebits.png'
  import solarstudio from '../../../images/IMG/crea/solarstudio.png'
  import tout from '../../../images/SVG/categories/tout.svg'
  import website from '../../../images/SVG/categories/web.svg'
  import bot from '../../../images/SVG/categories/bot.svg'
  import addon from '../../../images/SVG/categories/addon.svg'
  import left from '../../../images/SVG/arrow/left-arrow.svg'
  import right from '../../../images/SVG/arrow/right-arrow.svg'
</script>

<creations class="creations">
  <div class="categories-container">
    <h2>Catégories :</h2>
    <div class="categorie-container">
      <img src={tout} alt="">
      <p>Tout</p>
    </div>
    <div class="categorie-container">
      <img src={website} alt="Site Internet">
      <p>Site Internet</p>
    </div>
    <div class="categorie-container">
      <img src={bot} alt="Bot Discord">
      <p>Bot Discord</p>
    </div>
    <div class="categorie-container">
      <img src={addon} alt="Add-Ons MC:BE">
      <p>Add-On</p>
    </div>
  </div>
  <div class="crea-container">
    <div class="cadrillage">
      <div class="crea">
        <a href="https://securebits.vercel.app" target="_blank">
          <img src={securebits} alt="SecureBits">
        </a>
      </div>
      <div class="crea">
        <img src={web} alt="">
      </div>
      <div class="crea">
        <img src={web} alt="">
      </div>
    </div>
    <div class="cadrillage">
      <div class="crea">
        <a href="https://solar-studio.vercel.app" target="_blank">
          <img src={solarstudio} alt="Solar Studio">
        </a>
      </div>
      <div class="crea">
        <img src={web} alt="">
      </div>
      <div class="crea">
        <img src={web} alt="">
      </div>
    </div>
    <div class="cadrillage">
      <div class="crea">
        <img src={web} alt="">
      </div>
      <div class="crea">
        <img src={web} alt="">
      </div>
      <div class="crea">
        <img src={web} alt="">
      </div>
    </div>
  </div>

  <div class="pages-container">
    <div class="left">
      <img src={left} alt="Flèche de Gauche" id="left-arrow">
    </div>
    <div class="right">
      <img src={right} alt="Flèche de Droite" id="right-arrow">
    </div>
  </div>
</creations>

<style>
  @import './Creations.css';
</style>