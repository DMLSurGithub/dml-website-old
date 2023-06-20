<script>
  import web from '../../../images/web.png'
  import securebits from '../../../images/securebits.png'
  import solarstudio from '../../../images/solarstudio.png'
  import tout from '../../../images/tout.svg'
  import website from '../../../images/web.svg'
  import bot from '../../../images/bot.svg'
  import addon from '../../../images/addon.svg'
  import left from '../../../images/left-arrow.svg'
  import right from '../../../images/right-arrow.svg'
</script>

<creations class="creations">
  <div class="categories-container">
    <h2>Catégories :</h2>
    <div class="categorie">
      <img src={tout} alt="">
      <p>Tout</p>
    </div>
    <div class="categorie">
      <img src={website} alt="">
      <p>Site Internet</p>
    </div>
    <div class="categorie">
      <img src={bot} alt="">
      <p>Bot Discord</p>
    </div>
    <div class="categorie">
      <img src={addon} alt="">
      <p>Add-On</p>
    </div>
  </div>
  <div class="crea-container">
    <div class="cadrillage">
      <div class="crea">
        <a href="https://securebits.vercel.app" target="_blank">
          <img src={securebits} alt="">
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
          <img src={solarstudio} alt="">
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
      <img src={left} alt="" id="left-arrow">
    </div>
    <div class="right">
      <img src={right} alt="" id="right-arrow">
    </div>
  </div>
</creations>

<style>
  @import './Creations.css';
</style>