<script>
  import { navigate } from '../router.js';
  import QuienesSomos from './QuienesSomos.svelte';
  import Mision from './Mision.svelte';
  import Vision from './Vision.svelte';
</script>

<div class="min-h-screen">
  <div class="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
    <a
      href="/"
      class="inline-flex items-center gap-2 text-sm font-medium text-integrare-black hover:text-integrare-purple transition"
      onclick={(e) => {
        e.preventDefault();
        navigate('/');
      }}
    >
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      Volver al inicio
    </a>
  </div>
  <QuienesSomos />
  <Mision />
  <Vision />
</div>
