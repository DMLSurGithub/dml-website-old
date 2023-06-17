<script>
  import Navbar from '../lib/components/navbar/Navbar.svelte'; 
  import History from '../lib/components/qui/history/History.svelte'; 
  import Services from '../lib/components/qui/services/Services.svelte'; 
  import Technologies from '../lib/components/qui/technologies/Technologies.svelte'; 
</script>

<svelte:head>
	<title>DML - Qui suis-je</title>
	<meta name="description" content="Site officiel de DML, dessus vous pourrez retrouver des créations Web, Bot Discord et Add-Ons hors normes !" />
	<meta content="#121315" data-react-helmet="true" name="theme-color"/>
	<meta property="og:image" content="https://i.ibb.co/G74TVt9/dml.gif" />
</svelte:head>

<Navbar />

<History />

<Services />

<Technologies />

<style>
	@import '../styles.css';
</style>