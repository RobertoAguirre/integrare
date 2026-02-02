<script>
  import HeroCarousel from './HeroCarousel.svelte';
</script>
<section class="relative min-h-[32rem] overflow-hidden bg-integrare-white sm:min-h-[36rem] lg:min-h-[40rem]">
  <HeroCarousel />
  <div
    class="absolute inset-0 bg-gradient-to-r from-integrare-white via-integrare-white/95 to-integrare-white/70 sm:via-integrare-white/90 sm:to-transparent"
    aria-hidden="true"
  ></div>
  <div class="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-integrare-blue/20" aria-hidden="true"></div>
  <div class="relative z-10 mx-auto flex min-h-[32rem] max-w-6xl flex-col justify-center px-4 py-16 sm:min-h-[36rem] sm:px-6 sm:py-24 lg:min-h-[40rem] lg:px-8 lg:py-32">
    <div class="max-w-2xl">
      <img src="/logointegrare.png" alt="INTEGRARE — Consultoría, Capacitación y Desarrollo Humano" class="mb-8 h-auto w-full max-w-sm object-contain sm:max-w-md" />
      <p class="mt-6 text-base leading-relaxed text-integrare-black/80 sm:text-lg">
        Acompañamos a personas y organizaciones en su crecimiento a través de servicios terapéuticos, capacitación y consultoría con un enfoque humano y profesional.
      </p>
      <a
        href="#servicios"
        class="mt-10 inline-flex items-center gap-2 rounded-lg bg-integrare-purple px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-integrare-lavender transition"
      >
        Conocer servicios
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </div>
  </div>
  <div class="absolute right-0 top-1/2 z-10 h-px w-24 -translate-y-1/2 bg-integrare-black/10" aria-hidden="true"></div>
  <div class="absolute right-8 top-1/4 z-10 h-24 w-px bg-integrare-black/10" aria-hidden="true"></div>
</section>
