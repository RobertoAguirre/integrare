import { writable } from 'svelte/store';

export const agendarModal = writable({ open: false });

export function openAgendar() {
  agendarModal.set({ open: true });
}

export function closeAgendar() {
  agendarModal.set({ open: false });
}
