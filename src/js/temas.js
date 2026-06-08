// Troca de tema trocando a paleta inteira via custom properties (variaveis CSS).
// A landing original ja define todas essas variaveis no :root do styles.css,
// entao cada tema aqui sobrescreve a paleta completa pra pagina ficar coerente.
// 3 temas: lunar (padrao), cerrado e alta visibilidade (acessibilidade).
const temas = {
  lunar: {
    '--cor-fundo': '#0a0a0a',
    '--cor-superficie': '#1a1a1a',
    '--cor-superficie-clara': '#f2f0ec',
    '--cor-texto': '#f5f5f5',
    '--cor-texto-escuro': '#1a1a1a',
    '--cor-texto-secundario': '#b0b0b0',
    '--cor-texto-cinza': '#555555',
    '--cor-acento': '#0B3D91',
    '--cor-destaque': '#C73E1D',
    '--cor-borda': '#2a2a2a',
    '--cor-borda-clara': '#d5d0c8'
  },
  claro: {
    '--cor-fundo': '#ffffff',
    '--cor-superficie': '#f4f5f7',
    '--cor-superficie-clara': '#eceef1',
    '--cor-texto': '#1a1a1a',
    '--cor-texto-escuro': '#1a1a1a',
    '--cor-texto-secundario': '#4b5563',
    '--cor-texto-cinza': '#6b7280',
    '--cor-acento': '#0B3D91',
    '--cor-destaque': '#0B3D91',
    '--cor-borda': '#e5e7eb',
    '--cor-borda-clara': '#d1d5db'
  },
  alta_visibilidade: {
    '--cor-fundo': '#000000',
    '--cor-superficie': '#000000',
    '--cor-superficie-clara': '#000000',
    '--cor-texto': '#ffffff',
    '--cor-texto-escuro': '#ffe900',
    '--cor-texto-secundario': '#ffe900',
    '--cor-texto-cinza': '#ffe900',
    '--cor-acento': '#ffe900',
    '--cor-destaque': '#ffe900',
    '--cor-borda': '#ffe900',
    '--cor-borda-clara': '#ffe900'
  }
};

const aplicarTema = (nomeTema) => {
  const tema = temas[nomeTema];
  if (!tema) return;

  Object.entries(tema).forEach(([variavel, valor]) => {
    document.documentElement.style.setProperty(variavel, valor);
  });

  localStorage.setItem('tema-agrolunar', nomeTema);
};

export const iniciarTemas = () => {
  const botoes = document.querySelectorAll('[data-tema]');
  botoes.forEach(botao => {
    botao.addEventListener('click', () => aplicarTema(botao.dataset.tema));
  });

  // Restaura o tema salvo na visita anterior (se houver).
  const salvo = localStorage.getItem('tema-agrolunar');
  if (salvo) aplicarTema(salvo);
};
