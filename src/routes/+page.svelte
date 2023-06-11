<script>
  import Navbar from '../lib/components/navbar/Navbar.svelte'; 
  import History from '../lib/components/qui/history/History.svelte'; 
</script>

<svelte:head>
	<title>DML - Qui suis-je</title>
	<meta name="description" content="Site officiel de DML, dessus vous pourrez retrouver des créations Web, Bot Discord et Add-Ons hors normes !" />
	<meta content="#121315" data-react-helmet="true" name="theme-color"/>
	<meta property="og:image" content="https://i.ibb.co/jTbFfFX/favicon.jpg" />
</svelte:head>

<Navbar />

<History />

<style>
	@import '../styles.css';
</style>