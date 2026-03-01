<script>
  import { onMount } from 'svelte';
  import { path, initRouter } from './lib/router.js';
  import Header from './lib/components/Header.svelte';
  import Home from './lib/components/Home.svelte';
  import Nosotros from './lib/components/Nosotros.svelte';
  import Footer from './lib/components/Footer.svelte';
  import AgendarModal from './lib/components/AgendarModal.svelte';
  import WhatsAppButton from './lib/components/WhatsAppButton.svelte';

  onMount(() => initRouter());
</script>

<main class="min-h-screen flex flex-col">
  <Header />
  {#if $path === '/nosotros'}
    <Nosotros />
  {:else}
    <Home />
  {/if}
  <Footer />
  <AgendarModal />
  <WhatsAppButton />
</main>
