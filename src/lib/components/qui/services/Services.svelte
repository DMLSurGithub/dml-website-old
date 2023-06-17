<script>
  import svelte from '../../../images/svelte.png'
  import ts from '../../../images/ts.png'
  import json from '../../../images/json.png'
</script>

<div class="line">
</div>
<services class="services">
  <div class="services-container">
    <div class="service-container">
      <img src={svelte} alt="">
      <h3>Site Web | Svelte</h3>
      <p>Conception de site Web sur mesure, en utilisant le Framework Svelte</p>
    </div>
    <div class="service-container">
      <img src={ts} alt="">
      <h3>Bot Discord | TypeScript</h3>
      <p>Conception de Bot Discord sur mesure, en utilisant le langage TypeScript</p>
    </div>
    <div class="service-container">
      <img src={json} alt="">
      <h3>Add-Ons | JSON</h3>
      <p>Conception d'Add-Ons sur mesure, en utilisant le langage JSON</p>
    </div>
  </div>
</services>

<style>
  @import './Services.css';
</style>