<script>
  import Navbar from '../../lib/components/navbar/Navbar.svelte';
  import Reseau from '../../lib/components/infos/reseau/Reseau.svelte';
  import Liens from '../../lib/components/infos/liens/Liens.svelte';
  import Footer from '../../lib/components/footer/Footer.svelte';
</script>

<svelte:head>
	<title>DML - Informations</title>
	<meta name="description" content="Je m'appelle Djamel, j'ai 16 ans et je réside en région parisienne. Depuis mon plus jeune âge, ma passion pour l'informatique ne cesse de grandir. Au cours de la dernière année, j'ai particulièrement plongé dans le domaine du Développement Web et je me suis concentré sur l'apprentissage approfondi du Framework Svelte. Mais je fais aussi des Bots Discord en utilisant le langage de développement TypeScript et des Add-Ons Minecraft Bedrock en utilisant JSON et JavaScript." />
	<meta content="#121315" data-react-helmet="true" name="theme-color"/>
	<meta property="og:image" content="https://i.ibb.co/jTbFfFX/favicon.jpg" />
</svelte:head>

<Navbar />

<Reseau />

<Liens />

<Footer />

<style>
	@import '../../styles.css';
</style>