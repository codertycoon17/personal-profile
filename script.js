'use strict';
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
function closeMenu() { links?.classList.remove('open'); menu?.setAttribute('aria-expanded','false'); }
menu?.addEventListener('click', () => { const open=menu.getAttribute('aria-expanded')!=='true'; menu.setAttribute('aria-expanded',String(open)); links.classList.toggle('open',open); });
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
window.matchMedia('(min-width: 761px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
const copy = document.querySelector('.copy-email');
copy?.addEventListener('click',async()=>{const status=document.querySelector('.copy-status');try{await navigator.clipboard.writeText('garguday17@gmail.com');status.textContent='Email copied to clipboard.';copy.textContent='Copied ✓';}catch{status.textContent='Email: garguday17@gmail.com';}});
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches) document.querySelector('.hero-copy')?.classList.add('fade-in');
