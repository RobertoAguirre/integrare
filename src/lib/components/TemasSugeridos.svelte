<script>
  const columnaIzq = [
    'Softskills o Habilidades blandas',
    'Inteligencia emocional',
    'Manejo de ansiedad',
    'Autoestima y autocuidado',
    'Prevención de adicciones',
    'Prevención de abuso sexual infantil',
    'Prevención de suicidio',
    'Inteligencia emocional para el ambiente laboral',
    'Comunicación asertiva y efectiva',
    'Manejo de estrés y bienestar laboral',
    'Resiliencia y adaptación al cambio',
    'Manejo de conflictos interpersonales',
    'Mindfulness y regulación emocional',
  ];
  const columnaDer = [
    'Psicoeducación y desensibilización de trastornos mentales',
    'Equilibrio vida-trabajo',
    'Psicología positiva para el rendimiento',
    'Duelos',
    'Burnout',
    'Trabajo en equipo y cultura colaborativa',
  ];
</script>

<section id="temas" class="bg-[#C2E2E6]/50 py-16 sm:py-24">
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="flex items-start gap-4">
      <h2 class="font-serif text-2xl font-normal text-integrare-black sm:text-3xl">
        Temas sugeridos
      </h2>
      <span class="flex gap-0.5 text-integrare-black/40" aria-hidden="true">
        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2z"/></svg>
        <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2z"/></svg>
        <svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2z"/></svg>
      </span>
    </div>
    <div class="mt-10 grid gap-10 sm:grid-cols-2 lg:gap-16">
      <ul class="space-y-2 font-serif text-sm text-integrare-black/90 sm:text-base">
        {#each columnaIzq as tema}
          <li class="flex gap-2">
            <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-integrare-black/60" aria-hidden="true"></span>
            {tema}
          </li>
        {/each}
      </ul>
      <ul class="space-y-2 font-serif text-sm text-integrare-black/90 sm:text-base">
        {#each columnaDer as tema}
          <li class="flex gap-2">
            <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-integrare-black/60" aria-hidden="true"></span>
            {tema}
          </li>
        {/each}
        <li class="pt-4 font-serif italic text-integrare-black/80">Entre otros.</li>
      </ul>
    </div>
    <div class="mt-12 border-t border-integrare-black/15 pt-6" aria-hidden="true"></div>
  </div>
</section>
