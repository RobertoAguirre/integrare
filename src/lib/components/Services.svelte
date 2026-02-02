<script>
  const services = [
    {
      title: 'Tratamiento de problemas emocionales',
      description: 'Tratamiento de problemas emocionales como autoestima, manejo de emociones, manejo de conflictos, entre otros.',
      icon: 'emotion',
    },
    {
      title: 'Tratamiento de trastornos mentales y anímicos',
      description: 'Tratamiento de trastornos mentales y anímicos como ansiedad, depresión, TLP, etc.',
      icon: 'mind',
    },
    {
      title: 'Consultoría en adicciones',
      description: 'Consultoría en adicciones, asesoría individual, familiar, prevención de recaídas, etc.',
      icon: 'support',
    },
    {
      title: 'Arteterapia',
      description: 'Arteterapia, técnica que nos permite expresar emociones y conflictos a través del proceso creativo y de la expresión artística.',
      icon: 'art',
    },
    {
      title: 'Intervención tanatológica',
      description: 'Intervención tanatológica de diferentes duelos (pérdida de un ser querido, trabajo, pareja, cambios de vida, etc.).',
      icon: 'duelo',
    },
    {
      title: 'Terapia grupal',
      description: 'Terapia grupal, apoyo terapéutico a personas con problemas emocionales similares, para fomentar la psicoeducación en pares mediante técnicas psicológicas.',
      icon: 'grupo',
    },
  ];
</script>

<section id="servicios" class="bg-integrare-white py-16 sm:py-24">
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <h2 class="font-serif text-3xl font-normal text-integrare-black text-center sm:text-4xl">
      Servicios Terapéuticos
    </h2>
    <p class="mx-auto mt-4 max-w-2xl text-center text-integrare-gray">
      Apoyo profesional con enfoque humano e integral.
    </p>
    <ul class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {#each services as item}
        <li class="group rounded-2xl border border-integrare-blue/20 bg-integrare-white shadow-sm overflow-hidden transition hover:shadow-md hover:border-integrare-blue/30">
          <div class="h-2 bg-integrare-blue"></div>
          <div class="p-6 sm:p-8">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-integrare-blue/10 text-integrare-purple transition group-hover:bg-integrare-lavender/20">
              {#if item.icon === 'emotion'}
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              {:else if item.icon === 'mind'}
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              {:else if item.icon === 'support'}
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              {:else if item.icon === 'art'}
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4m0 0h12m-12 0a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4m0 0h12" />
                </svg>
              {:else if item.icon === 'duelo'}
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              {:else}
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              {/if}
            </div>
            <h3 class="mt-4 font-semibold text-integrare-black">
              {item.title}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-integrare-gray">
              {item.description}
            </p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>
