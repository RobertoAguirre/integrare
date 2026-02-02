<script>
  import { onMount } from 'svelte';

  const slides = ['/curso1.jpeg', '/curso2.jpeg', '/curso3.jpeg'];
  let index = $state(0);

  onMount(() => {
    const id = setInterval(() => {
      index = (index + 1) % slides.length;
    }, 4500);
    return () => clearInterval(id);
  });
</script>

<div class="absolute inset-0" aria-hidden="true">
  {#each slides as src, i}
    <div
      class="absolute inset-0 transition-opacity duration-700 ease-out"
      class:opacity-0={i !== index}
      class:opacity-100={i === index}
    >
      <img
        src={src}
        alt=""
        class="h-full w-full object-cover"
        loading={i === 0 ? 'eager' : 'lazy'}
      />
    </div>
  {/each}
</div>
