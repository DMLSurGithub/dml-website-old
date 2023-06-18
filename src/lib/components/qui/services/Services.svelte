<script>
  import website from '../../../images/website.png'
  import bot from '../../../images/bot.png'
  import addon from '../../../images/addon.png'
</script>

<div class="line">
</div>
<services class="services">
  <h1>Mes Services :</h1>
  <div class="services-container">
    <div class="service-container">
      <img src={website} alt="">
      <h3>Site Web</h3>
      <p><span>Conception de site Web sur mesure</span><br><br>Technologies utilisées :<br>Svelte / HTML / CSS / TypeScript</p>
    </div>
    <div class="service-container">
      <img src={bot} alt="">
      <h3>Bot Discord</h3>
      <p><span>Conception de Bot Discord sur mesure</span><br><br>Technologies utilisées :<br>TypeScript</p>
    </div>
    <div class="service-container">
      <img src={addon} alt="">
      <h3>Add-Ons</h3>
      <p><span>Conception d'Add-Ons sur mesure</span><br><br>Technologies utilisées :<br>JSON / JavaScript</p>
    </div>
  </div>
</services>

<style>
  @import './Services.css';
</style>