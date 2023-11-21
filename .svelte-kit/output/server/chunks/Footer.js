import { c as create_ssr_component, d as add_attribute } from "./index.js";
const black = "/_app/immutable/assets/black.210039ad.svg";
const trad = "/_app/immutable/assets/trad.77c5536f.svg";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@import './Navbar.css';",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<navbar class="navbar"><div class="theme-container"><img${add_attribute("src", black, 0)} alt="Black"></div>
  <div class="txt-container"><a href="/">/Qui suis-je</a>
        <a href="/portfolio">/Portfolio</a>
        <a href="/infos">/Informations</a></div>
  <div class="trad-container"><img${add_attribute("src", trad, 0)} alt="Traduction"></div>
</navbar>`;
});
const pdp = "/_app/immutable/assets/pp.4f7f3001.png";
const discord = "/_app/immutable/assets/discord.7d82ee24.svg";
const github = "/_app/immutable/assets/github.018a09cf.svg";
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import './Footer.css';",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="line"></div>
<footer><div class="pp-container"><img${add_attribute("src", pdp, 0)} alt="PP"></div>
  <div class="center"><div class="description-container"><p>Je suis un jeune Développeur !<br>Je fais principalement du Frontend en utilisant le Framework Svelte.</p></div>
  <div class="bydml-container"><p>Fais avec ❤️ par <a href="https://github.com/DMLSurGithub/" target="_blank">DML</a></p></div></div>
  <div class="reseau-container"><h6>Réseaux Sociaux :</h6>
    <a href="https://github.com/DMLSurGithub/" target="_blank"><img${add_attribute("src", discord, 0)} alt="Discord Logo"></a>
    <a href="https://github.com/DMLSurGithub/" target="_blank"><img${add_attribute("src", github, 0)} alt="Github Logo"></a></div>
</footer>`;
});
export {
  Footer as F,
  Navbar as N,
  pdp as p
};
