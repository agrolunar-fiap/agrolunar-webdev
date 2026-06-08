// Controle do slideshow do AgroLunar.
// 3 slides em rotacao, botoes anterior/proximo e auto-avanco a cada 5 segundos.
const slides = document.querySelectorAll('.slide');
const botaoProximo = document.querySelector('.btn-proximo');
const botaoAnterior = document.querySelector('.btn-anterior');

let indiceAtual = 0;
let intervalo;

const mostrarSlide = (indice) => {
  slides.forEach((slide, i) => {
    slide.classList.toggle('ativo', i === indice);
  });
};

const proximo = () => {
  indiceAtual = (indiceAtual + 1) % slides.length;
  mostrarSlide(indiceAtual);
};

const anterior = () => {
  indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
  mostrarSlide(indiceAtual);
};

const iniciarAuto = () => {
  intervalo = setInterval(proximo, 5000);
};

const pararAuto = () => {
  clearInterval(intervalo);
};

// Reinicia o timer sempre que o usuario clica num botao manual,
// pra nao trocar o slide logo depois do clique.
const reiniciarAuto = () => {
  pararAuto();
  iniciarAuto();
};

export const iniciarSlideshow = () => {
  if (!slides.length) return;
  mostrarSlide(0);
  iniciarAuto();
  botaoProximo?.addEventListener('click', () => { proximo(); reiniciarAuto(); });
  botaoAnterior?.addEventListener('click', () => { anterior(); reiniciarAuto(); });
};
