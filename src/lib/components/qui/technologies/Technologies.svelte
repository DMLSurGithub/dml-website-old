<script>
  import svelte from '../../../images/IMG/techno/svelte.png'
  import js from '../../../images/IMG/techno/js.png'
  import sql from '../../../images/IMG/techno/sql.png'
  import html from '../../../images/IMG/techno/html.png'
  import css from '../../../images/IMG/techno/css.png'
  import github from '../../../images/IMG/techno/github.png'
</script>

<div class="center-line">
  <div class="line">
  </div>
</div>
<technologies class="technologies">
  <h1>Technologies Utilisées :</h1>
  <div class="technologies-container">
    <div class="row">
      <div class="tech-container">
        <a href="https://svelte.dev/" target="_blank">
          <img src={svelte} alt="Svelte">
          <h4>Svelte</h4>
        </a>
      </div>
      <div class="tech-container">
        <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank">
          <img src={html} alt="HTML">
          <h4>HTML</h4>
        </a>
      </div>
      <div class="tech-container">
        <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank">
          <img src={css} alt="CSS">
          <h4>CSS</h4>
        </a>
      </div>
    <div class="tech-container">
      <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank">
        <img class="js" src={js} alt="js">
        <h4>JavaScript</h4>
      </a>
    </div>
    <div class="tech-container">
      <a href="https://sql.sh/" target="_blank">
        <img class="sql" src={sql} alt="SQL">
        <h4>SQL</h4>
      </a>
    </div>
    <div class="tech-container">
      <a href="https://github.com/" target="_blank">
        <img src={github} alt="GIT & GitHub">
        <h4>GIT & Github</h4>
      </a>
    </div>
  </div>
</div>
</technologies>

<style>
  @import './Technologies.css';
</style>