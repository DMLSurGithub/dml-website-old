<script>
  import svelte from '../../../images/svelte.png'
  import ts from '../../../images/ts.png'
  import json from '../../../images/json.png'
  import html from '../../../images/html.png'
  import css from '../../../images/css.png'
  import js from '../../../images/js.png'
  import github from '../../../images/github.png'
</script>

<div class="line">
</div>
<technologies class="technologies">
  <h1>Technologies Utilisées :</h1>
  <div class="technologies-container">
    <div class="row">
      <a href="https://svelte.dev/" target="_blank" class="redirect">
        <div class="tech-container">
          <img src={svelte} alt="">
          <h4>Svelte</h4>
        </div>
      </a>
      <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" class="redirect">
      <div class="tech-container">
        <img src={html} alt="">
        <h4>HTML</h4>
      </div>
      </a>
      <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" class="redirect">
      <div class="tech-container">
        <img src={css} alt="">
        <h4>CSS</h4>
      </div>
    </a>
    <a href="https://www.json.org/json-fr.html" target="_blank" class="redirect">
      <div class="tech-container">
        <img src={json} alt="">
        <h4>JSON</h4>
      </div>
    </a>
    </div>
    <div class="row">
      <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" class="redirect">
      <div class="tech-container">
        <img src={js} alt="">
        <h4>JavaScript</h4>
      </div>
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank" class="redirect">
     <div class="tech-container">
        <img src={ts} alt="">
        <h4>TypeScript</h4>
      </div>
      </a>
      <a href="https://github.com/" target="_blank" class="redirect">
      <div class="tech-container">
       <img src={github} alt="">
       <h4>GIT & Github</h4>
      </div>
      </a>
    </div>
  </div>
</technologies>

<style>
  @import './Technologies.css';
</style>