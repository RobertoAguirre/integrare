<script>
  import { path, navigate } from '../router.js';

  let open = $state(false);

  function goTo(href) {
    if (href.startsWith('#')) return;
    open = false;
    navigate(href);
  }
</script>

<header class="sticky top-0 z-50 bg-integrare-white/95 backdrop-blur border-b border-integrare-blue/20">
  <nav class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <a
        href="/"
        class="flex items-center gap-3"
        aria-label="INTEGRARE inicio"
        onclick={(e) => {
          e.preventDefault();
          goTo('/');
        }}
      >
        <img src="/logointegrare.png" alt="INTEGRARE — Consultoría, Capacitación y Desarrollo Humano" class="h-12 w-auto object-contain sm:h-14" />
      </a>
      <div class="hidden md:flex md:items-center md:gap-5">
        {#if $path === '/nosotros'}
          <a
            href="/"
            class="text-sm font-medium text-integrare-black hover:text-integrare-purple transition"
            onclick={(e) => { e.preventDefault(); goTo('/'); }}
          >Inicio</a>
          <a
            href="/#contacto"
            class="text-sm font-medium text-integrare-black hover:text-integrare-purple transition"
            onclick={(e) => { e.preventDefault(); goTo('/'); setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 50); }}
          >Contacto</a>
        {:else}
          <a
            href="/nosotros"
            class="text-sm font-medium text-integrare-black hover:text-integrare-purple transition"
            onclick={(e) => { e.preventDefault(); goTo('/nosotros'); }}
          >Nosotros</a>
          <a href="#servicios" class="text-sm font-medium text-integrare-black hover:text-integrare-purple transition">Servicios</a>
          <a href="#promocion" class="text-sm font-medium text-integrare-black hover:text-integrare-purple transition">Promoción</a>
          <a href="#temas" class="text-sm font-medium text-integrare-black hover:text-integrare-purple transition">Temas</a>
          <a href="#equipo" class="text-sm font-medium text-integrare-black hover:text-integrare-purple transition">Equipo</a>
          <a href="#contacto" class="text-sm font-medium text-integrare-black hover:text-integrare-purple transition">Contacto</a>
        {/if}
      </div>
      <button
        type="button"
        class="md:hidden rounded-lg p-2 text-integrare-black hover:bg-integrare-blue/10"
        aria-expanded={open}
        aria-label="Menú"
        onclick={() => open = !open}
      >
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if open}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
    {#if open}
      <div class="border-t border-integrare-blue/10 py-3 md:hidden">
        {#if $path === '/nosotros'}
          <a href="/" class="block py-2 text-sm font-medium text-integrare-black" onclick={(e) => { e.preventDefault(); goTo('/'); }}>Inicio</a>
          <a href="/#contacto" class="block py-2 text-sm font-medium text-integrare-black" onclick={(e) => { e.preventDefault(); goTo('/'); setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Contacto</a>
        {:else}
          <a href="/nosotros" class="block py-2 text-sm font-medium text-integrare-black" onclick={(e) => { e.preventDefault(); goTo('/nosotros'); }}>Nosotros</a>
          <a href="#servicios" class="block py-2 text-sm font-medium text-integrare-black">Servicios</a>
          <a href="#promocion" class="block py-2 text-sm font-medium text-integrare-black">Promoción</a>
          <a href="#temas" class="block py-2 text-sm font-medium text-integrare-black">Temas</a>
          <a href="#equipo" class="block py-2 text-sm font-medium text-integrare-black">Equipo</a>
          <a href="#contacto" class="block py-2 text-sm font-medium text-integrare-black">Contacto</a>
        {/if}
      </div>
    {/if}
  </nav>
</header>
