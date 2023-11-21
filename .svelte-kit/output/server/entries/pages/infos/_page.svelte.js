import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { N as Navbar, F as Footer } from "../../../chunks/Footer.js";
import { g as github } from "../../../chunks/github.js";
const discord = "/_app/immutable/assets/discord.3e862997.png";
const Reseau_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "@import './Reseau.css';",
  map: null
};
const Reseau = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<reseau class="reseau"><h1>Mes réseaux :</h1>
  <div class="reseausociaux-container"><img${add_attribute("src", github, 0)} alt="Github">
    <p><span class="under-line">Github :</span> DMLSurGithub</p></div>
  <div class="reseausociaux-container"><img${add_attribute("src", discord, 0)} alt="Discord">
    <p><span class="under-line">Discord :</span> dmlsurdsc</p></div>
</reseau>`;
});
const lien = "/_app/immutable/assets/lien.7ceb1b7a.svg";
const Liens_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@import './Liens.css';",
  map: null
};
const Liens = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<liens class="liens"><h1>Liens utiles :</h1>
  <div class="liens-container"><img${add_attribute("src", lien, 0)} alt="lien">
    <a href="https://discord.gg/FVX38vYB9k" target="_blank">Discord Solar Studio</a></div>
  <div class="liens-container"><img${add_attribute("src", lien, 0)} alt="Discord">
    <a href="https://solar-studio.vercel.app" target="_blank">Site Solar Studio</a></div>
  <div class="liens-container"><img${add_attribute("src", lien, 0)} alt="E-mail">
    <a href="dml-contactpro@gmail.com" target="_blank">dml-contactpro@gmail.com</a></div>
</liens>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import '../../styles.css';",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-qa6s5y_START -->${$$result.title = `<title>DML - Informations</title>`, ""}<meta name="description" content="Je m'appelle Djamel, j'ai 16 ans et je réside en région parisienne. Depuis mon plus jeune âge, ma passion pour l'informatique ne cesse de grandir. Au cours de la dernière année, j'ai particulièrement plongé dans le domaine du Développement Web et je me suis concentré sur l'apprentissage approfondi du Framework Svelte. Mais je fais aussi des Bots Discord en utilisant le langage de développement TypeScript et des Add-Ons Minecraft Bedrock en utilisant JSON et JavaScript."><meta content="#121315" data-react-helmet="true" name="theme-color"><meta property="og:image" content="https://i.ibb.co/jTbFfFX/favicon.jpg"><!-- HEAD_svelte-qa6s5y_END -->`, ""}

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

${validate_component(Reseau, "Reseau").$$render($$result, {}, {}, {})}

${validate_component(Liens, "Liens").$$render($$result, {}, {}, {})}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
