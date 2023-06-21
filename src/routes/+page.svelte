<script>
  import Navbar from '../lib/components/navbar/Navbar.svelte'; 
  import History from '../lib/components/qui/history/History.svelte'; 
  import Services from '../lib/components/qui/services/Services.svelte'; 
  import Technologies from '../lib/components/qui/technologies/Technologies.svelte'; 
  import Footer from '../lib/components/footer/Footer.svelte'; 
</script>

<svelte:head>
	<title>DML - Qui suis-je</title>
	<meta name="description" content="Je m'appelle Djamel, j'ai 16 ans et je réside en région parisienne. Depuis mon plus jeune âge, ma passion pour l'informatique ne cesse de grandir. Au cours de la dernière année, j'ai particulièrement plongé dans le domaine du Développement Web et je me suis concentré sur l'apprentissage approfondi du Framework Svelte. Mais je fais aussi des Bots Discord en utilisant le langage de développement TypeScript et des Add-Ons Minecraft Bedrock en utilisant JSON et JavaScript." />
	<meta content="#121315" data-react-helmet="true" name="theme-color"/>
	<meta property="og:image" content="https://i.ibb.co/G74TVt9/dml.gif" />
</svelte:head>

<Navbar />

<History />

<Services />

<Technologies />

<Footer />

<style>
	@import '../styles.css';
</style>