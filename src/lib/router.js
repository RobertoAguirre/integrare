import { writable } from 'svelte/store';

function getPath() {
  if (typeof window === 'undefined') return '/';
  return window.location.pathname.replace(/\/$/, '') || '/';
}

export const path = writable(getPath());

export function navigate(href) {
  if (href.startsWith('http') || href.startsWith('//')) return;
  const clean = href.replace(/\/$/, '') || '/';
  history.pushState({}, '', clean === '/' ? '/' : clean);
  path.set(clean);
}

export function initRouter() {
  if (typeof window === 'undefined') return;
  const onPop = () => path.set(getPath());
  window.addEventListener('popstate', onPop);
  return () => window.removeEventListener('popstate', onPop);
}
