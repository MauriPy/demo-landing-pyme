// Menú móvil
const btn=document.querySelector('.menu-btn'),menu=document.getElementById('menu');
btn.addEventListener('click',()=>{const o=menu.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
menu.addEventListener('click',e=>{if(e.target.closest('a')){menu.classList.remove('open');btn.setAttribute('aria-expanded','false')}});

// Galería con lightbox
const lb=document.getElementById('lightbox'),lbImg=lb.querySelector('img');
document.querySelectorAll('.g-item').forEach(b=>b.addEventListener('click',()=>{lbImg.src=b.dataset.full;lbImg.alt=b.querySelector('img').alt;lb.showModal()}));
lb.querySelector('.lb-close').addEventListener('click',()=>lb.close());
lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});

// Formulario con validación en el cliente
const form=document.getElementById('form');
const fecha=form.fecha;fecha.min=new Date(Date.now()+864e5).toISOString().slice(0,10);
const rules={
  nombre:v=>v.trim().length>=2||'Ingresa tu nombre.',
  telefono:v=>/^(\+?56)?\s?9\s?\d{4}\s?\d{4}$/.test(v.replace(/[-()]/g,'').trim())||'Ingresa un celular chileno válido, ej: +56 9 1234 5678.',
  email:v=>!v||/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)||'Revisa el formato del correo.',
  tipo:v=>!!v||'Elige el tipo de pedido.',
  fecha:v=>(!!v&&v>=fecha.min)||'Elige una fecha desde mañana en adelante.',
  mensaje:v=>v.trim().length>=10||'Cuéntanos un poco más (mínimo 10 caracteres).'
};
function check(el){const r=rules[el.name](el.value),f=el.closest('.field');const ok=r===true;f.classList.toggle('invalid',!ok);el.setAttribute('aria-invalid',!ok);f.querySelector('.err').textContent=ok?'':r;return ok}
Object.keys(rules).forEach(n=>{const el=form[n];el.addEventListener('blur',()=>check(el));el.addEventListener('input',()=>{if(el.closest('.field').classList.contains('invalid'))check(el)})});
form.addEventListener('submit',e=>{e.preventDefault();const bad=Object.keys(rules).map(n=>form[n]).filter(el=>!check(el));
  if(bad.length){bad[0].focus();return}
  form.querySelector('.form-ok').hidden=false;form.reset();});
