// Validacao do formulario "quero saber mais".
// Impede envio com campos vazios, valida o email e mostra o retorno via alert.
const form = document.querySelector('#form-contato');

const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const iniciarFormulario = () => {
  if (!form) return;

  form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const dados = new FormData(form);
    const nome = dados.get('nome')?.trim();
    const email = dados.get('email')?.trim();
    const mensagem = dados.get('mensagem')?.trim();

    if (!nome || !email || !mensagem) {
      alert('Preencha todos os campos antes de enviar.');
      return;
    }

    if (!validarEmail(email)) {
      alert('E-mail parece inválido. Confere se tá certo.');
      return;
    }

    alert(`Obrigado ${nome}, mensagem recebida.`);
    form.reset();
  });
};
