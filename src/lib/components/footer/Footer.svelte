<script>
  import pp from '../../images/IMG/pdp/pp.png'
  import discord from '../../images/SVG/reseau/discord.svg'
  import github from '../../images/SVG/reseau/github.svg'
</script>

<div class="line">
</div>
<footer>
  <div class="pp-container">
    <img src={pp} alt="PP">
  </div>
  <div class="center">
  <div class="description-container">
    <p>Je suis un jeune Développeur !<br>Je fais principalement du Frontend en utilisant le Framework Svelte.</p>
  </div>
  <div class="bydml-container">
    <p>Fais avec ❤️ par <a href="https://github.com/DMLSurGithub/" target="_blank">DML</a></p>
  </div>
  </div>
  <div class="reseau-container">
    <h6>Réseaux Sociaux :</h6>
    <a href="https://github.com/DMLSurGithub/" target="_blank">
    <img src={discord} alt="Discord Logo">
    </a>
    <a href="https://github.com/DMLSurGithub/" target="_blank">
    <img src={github} alt="Github Logo">
    </a>
  </div>
</footer>

<style>
  @import './Footer.css';
</style>