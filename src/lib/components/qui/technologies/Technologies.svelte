<script>
  import svelte from '../../../images/IMG/techno/svelte.png'
  import ts from '../../../images/IMG/techno/ts.png'
  import json from '../../../images/IMG/techno/json.png'
  import html from '../../../images/IMG/techno/html.png'
  import css from '../../../images/IMG/techno/css.png'
  import js from '../../../images/IMG/techno/js.png'
  import github from '../../../images/IMG/techno/github.png'
</script>

<div class="line">
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
        <a href="https://www.json.org/json-fr.html" target="_blank">
          <img src={json} alt="JSON">
          <h4>JSON</h4>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="tech-container">
        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank">
          <img src={js} alt="JavaScript">
          <h4>JavaScript</h4>
        </a>
      </div>
    <div class="tech-container">
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src={ts} alt="TypeScript">
        <h4>TypeScript</h4>
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