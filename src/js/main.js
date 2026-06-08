// Entry point: importa cada modulo e inicia tudo quando o DOM estiver pronto.
import { iniciarSlideshow } from './slideshow.js';
import { iniciarFormulario } from './formulario.js';
import { iniciarQuiz } from './quiz.js';
import { iniciarTemas } from './temas.js';

document.addEventListener('DOMContentLoaded', () => {
  iniciarSlideshow();
  iniciarFormulario();
  iniciarQuiz();
  iniciarTemas();
});
