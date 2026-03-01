<script>
  import { agendarModal, closeAgendar } from '../stores/agendarModal.js';

  const opcionesTipo = [
    { value: 'curso', label: 'Curso' },
    { value: 'platica', label: 'Plática' },
    { value: 'taller', label: 'Taller' },
  ];

  let tipo = $state('curso');
  let nombre = $state('');
  let email = $state('');
  let telefono = $state('');
  let mensaje = $state('');
  let sending = $state(false);
  let done = $state(false);
  let error = $state('');

  const apiUrl = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL
    : '';

  function handleClose() {
    if (!sending) {
      tipo = 'curso';
      nombre = email = telefono = mensaje = error = '';
      done = false;
      closeAgendar();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    error = '';
    sending = true;
    try {
      const res = await fetch(`${apiUrl}/api/citas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo, nombre, email, telefono, mensaje: mensaje.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Error al enviar');
      done = true;
      setTimeout(handleClose, 2000);
    } catch (err) {
      error = err.message || 'No se pudo enviar. Intenta más tarde.';
    } finally {
      sending = false;
    }
  }
</script>

{#if $agendarModal?.open}
  <div
    class="fixed inset-0 z-[100] flex items-center justify-center bg-integrare-black/50 p-4"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    tabindex="-1"
    onclick={(e) => e.target === e.currentTarget && handleClose()}
    onkeydown={(e) => e.key === 'Escape' && handleClose()}
  >
    <div
      class="w-full max-w-md rounded-2xl border border-integrare-blue/20 bg-integrare-white shadow-xl"
      role="document"
      onclick={(e) => e.stopPropagation()}
      onkeydown={(e) => e.stopPropagation()}
    >
      <div class="flex items-center justify-between border-b border-integrare-blue/10 px-6 py-4">
        <h2 id="modal-title" class="font-serif text-xl text-integrare-black">
          Cotizar talleres, cursos o pláticas
        </h2>
        <button
          type="button"
          class="rounded-lg p-1 text-integrare-gray hover:bg-integrare-blue/10 hover:text-integrare-black"
          aria-label="Cerrar"
          onclick={handleClose}
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {#if done}
        <p class="px-6 py-8 text-center text-integrare-black/90">Solicitud enviada. Te contactaremos pronto.</p>
      {:else}
        <form onsubmit={handleSubmit} class="p-6 space-y-4">
          <div>
            <label for="cotizar-tipo" class="block text-sm font-medium text-integrare-black">¿Qué te interesa? *</label>
            <select id="cotizar-tipo" bind:value={tipo} required class="mt-1 w-full rounded-lg border border-integrare-blue/30 px-3 py-2 text-integrare-black bg-white">
              {#each opcionesTipo as op}
                <option value={op.value}>{op.label}</option>
              {/each}
            </select>
          </div>
          <div>
            <label for="cotizar-mensaje" class="block text-sm font-medium text-integrare-black">¿Qué necesitas? *</label>
            <textarea id="cotizar-mensaje" bind:value={mensaje} rows="4" required placeholder="Describe lo que necesitas..." class="mt-1 w-full rounded-lg border border-integrare-blue/30 px-3 py-2 text-integrare-black"></textarea>
          </div>
          <div>
            <label for="cotizar-nombre" class="block text-sm font-medium text-integrare-black">Nombre *</label>
            <input id="cotizar-nombre" type="text" bind:value={nombre} required class="mt-1 w-full rounded-lg border border-integrare-blue/30 px-3 py-2 text-integrare-black" />
          </div>
          <div>
            <label for="cotizar-email" class="block text-sm font-medium text-integrare-black">Email *</label>
            <input id="cotizar-email" type="email" bind:value={email} required class="mt-1 w-full rounded-lg border border-integrare-blue/30 px-3 py-2 text-integrare-black" />
          </div>
          <div>
            <label for="cotizar-telefono" class="block text-sm font-medium text-integrare-black">Teléfono *</label>
            <input id="cotizar-telefono" type="tel" bind:value={telefono} required class="mt-1 w-full rounded-lg border border-integrare-blue/30 px-3 py-2 text-integrare-black" />
          </div>
          {#if error}
            <p class="text-sm text-red-600">{error}</p>
          {/if}
          <div class="flex gap-3 pt-2">
            <button type="button" onclick={handleClose} class="flex-1 rounded-lg border border-integrare-gray/40 px-4 py-2 text-sm font-medium text-integrare-black hover:bg-integrare-blue/10">Cancelar</button>
            <button type="submit" disabled={sending} class="flex-1 rounded-lg bg-integrare-purple px-4 py-2 text-sm font-medium text-white hover:bg-integrare-lavender disabled:opacity-60">
              {sending ? 'Enviando…' : 'Enviar'}
            </button>
          </div>
        </form>
      {/if}
    </div>
  </div>
{/if}
