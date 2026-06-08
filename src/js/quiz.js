// Logica do quiz: renderiza uma pergunta por vez, conta pontos e mostra resultado.
import { perguntas } from './perguntas.js';

const container = document.querySelector('#quiz-container');
let perguntaAtual = 0;
let pontuacao = 0;

const renderizarPergunta = () => {
  if (perguntaAtual >= perguntas.length) {
    renderizarResultado();
    return;
  }

  const p = perguntas[perguntaAtual];
  container.innerHTML = `
    <div class="pergunta">
      <h3>Pergunta ${perguntaAtual + 1} de ${perguntas.length}</h3>
      <p>${p.enunciado}</p>
      <div class="opcoes">
        ${p.opcoes.map((opcao, i) => `
          <button class="opcao" data-indice="${i}">${opcao}</button>
        `).join('')}
      </div>
    </div>
  `;

  document.querySelectorAll('.opcao').forEach(botao => {
    botao.addEventListener('click', () => responder(parseInt(botao.dataset.indice)));
  });
};

const responder = (indiceEscolhido) => {
  const p = perguntas[perguntaAtual];
  const acertou = indiceEscolhido === p.correta;

  if (acertou) pontuacao++;

  // Desabilita as opcoes pra evitar clique duplo depois de responder.
  document.querySelectorAll('.opcao').forEach(botao => {
    botao.disabled = true;
    const indice = parseInt(botao.dataset.indice);
    if (indice === p.correta) botao.classList.add('opcao-correta');
    if (indice === indiceEscolhido && !acertou) botao.classList.add('opcao-errada');
  });

  container.innerHTML += `
    <div class="feedback-pergunta ${acertou ? 'certo' : 'errado'}">
      <p><strong>${acertou ? 'Acertou!' : 'Errou.'}</strong> ${p.explicacao}</p>
      <button class="btn-proxima">Próxima</button>
    </div>
  `;

  document.querySelector('.btn-proxima').addEventListener('click', () => {
    perguntaAtual++;
    renderizarPergunta();
  });
};

const renderizarResultado = () => {
  container.innerHTML = `
    <div class="resultado">
      <h3>Você acertou ${pontuacao} de ${perguntas.length}</h3>
      <p>${mensagemFinal(pontuacao)}</p>
      <button class="btn-refazer">Refazer quiz</button>
    </div>
  `;

  document.querySelector('.btn-refazer').addEventListener('click', () => {
    perguntaAtual = 0;
    pontuacao = 0;
    renderizarPergunta();
  });
};

const mensagemFinal = (pontos) => {
  if (pontos === 10) return "Perfeito. Você já é do AgroLunar.";
  if (pontos >= 7) return "Mandou bem. Está por dentro do tema.";
  if (pontos >= 4) return "Razoável. Vale dar uma estudada no projeto.";
  return "Dá uma volta no site e tente de novo.";
};

export const iniciarQuiz = () => {
  if (!container) return;
  renderizarPergunta();
};
