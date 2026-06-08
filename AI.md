# AI.md - Registro de uso de Inteligencia Artificial

Este documento registra cada interacao com IA durante o desenvolvimento do projeto AgroLunar.
A disciplina permite o uso de IA desde que documentado. Optamos por registrar tudo de forma honesta.

---

## Interacao 1

**Data:** 08/06/2026
**Quem perguntou:** Vitor
**O que foi solicitado:**
"Como faço slideshow em JavaScript puro com 3 imagens, botões anterior/próximo e auto-avanço a cada 5 segundos?"

**O que a IA retornou:**
Sugeriu codigo usando setInterval pra auto-avanco, classList.toggle pra trocar slide ativo, addEventListener nos botoes. Codigo organizado em funcoes proximo(), anterior(), iniciarAuto(), pararAuto().

**O que alteramos ou rejeitamos:**
- ACEITAMOS a estrutura geral do codigo.
- ALTERAMOS os nomes de variaveis pra portugues (slideAtivo virou indiceAtual).
- ADICIONAMOS feature de pausar o auto quando usuario clica em botao manual (a IA nao incluiu, mas percebemos que ficava ruim sem isso - juntamos numa funcao reiniciarAuto()).

---

## Interacao 2

**Data:** 08/06/2026
**Quem perguntou:** Ryan
**O que foi solicitado:**
"Me ajuda a criar 10 perguntas de quiz sobre cultivo lunar, NASA Artemis e vertical farming, com 4 opcoes cada e indicacao da correta."

**O que a IA retornou:**
Retornou 10 perguntas. Algumas com dados imprecisos (afirmou que Artemis II voaria em 2025).

**O que alteramos ou rejeitamos:**
- REJEITAMOS a data da Artemis II (corrigimos pra 2026, ano em que voou de verdade).
- ALTERAMOS o tom de algumas explicacoes pra ficar menos formal.
- ADICIONAMOS uma pergunta sobre o ESP32 (que a IA tinha esquecido, mas eh o nosso hardware).

---

## Interacao 3

**Data:** 08/06/2026
**Quem perguntou:** Robert
**O que foi solicitado:**
"Como faço validacao de email em JavaScript sem usar biblioteca externa?"

**O que a IA retornou:**
Sugeriu o regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` que cobre o formato basico.

**O que alteramos ou rejeitamos:**
- ACEITAMOS o regex.
- ALTERAMOS a mensagem de erro pra ser mais informal ("E-mail parece invalido. Confere se ta certo.").

---

## Interacao 4

**Data:** 08/06/2026
**Quem perguntou:** Vitor
**O que foi solicitado:**
"Faz sentido salvar a preferencia de tema do usuario no localStorage?"

**O que a IA retornou:**
Confirmou que sim, sugeriu padrao com setItem/getItem na funcao de aplicar tema.

**O que alteramos ou rejeitamos:**
- ACEITAMOS a sugestao integral. Acrescentamos a chamada de restauracao no iniciarTemas() pra carregar o tema escolhido na visita anterior.

---

## Interacao 5

**Data:** 08/06/2026
**Quem perguntou:** Ryan
**O que foi solicitado:**
"No quiz, depois que a pessoa responde, da pra mostrar qual era a certa e travar os botoes pra nao clicar de novo?"

**O que a IA retornou:**
Sugeriu desabilitar os botoes com `botao.disabled = true` apos responder e adicionar classes CSS (opcao-correta / opcao-errada) pra destacar visualmente a resposta certa e a errada escolhida.

**O que alteramos ou rejeitamos:**
- ACEITAMOS a logica de desabilitar e destacar.
- ADICIONAMOS as classes no CSS (.opcao-correta verde, .opcao-errada vermelho) pra dar o feedback visual.

---

## Interacao 6

**Data:** 08/06/2026
**Quem perguntou:** Vitor
**O que foi solicitado:**
"Como organizar o JS em ES Modules pra cada feature ficar num arquivo separado e o HTML importar so um arquivo de entrada?"

**O que a IA retornou:**
Explicou usar `export`/`import` entre os arquivos e carregar so o main.js com `<script type="module">`. main.js importa e chama cada iniciar...() dentro do DOMContentLoaded.

**O que alteramos ou rejeitamos:**
- ACEITAMOS a estrutura (main, slideshow, quiz, formulario, temas, perguntas).
- ENTENDEMOS que ES Modules so funcionam via servidor http (file:// bloqueia por CORS), entao testamos com Live Server.

---

## Interacao 7

**Data:** 08/06/2026
**Quem perguntou:** Robert
**O que foi solicitado:**
"Como faço os 3 temas trocarem a paleta inteira e nao so a cor de fundo?"

**O que a IA retornou:**
Sugeriu definir as cores como custom properties no :root do CSS e, no JS, trocar os valores com `document.documentElement.style.setProperty()`. Assim todos os elementos que usam var(--cor-x) mudam de uma vez.

**O que alteramos ou rejeitamos:**
- ACEITAMOS a abordagem por custom properties.
- DEFINIMOS as 3 paletas (lunar, claro e alta visibilidade) cobrindo a paleta completa pra pagina ficar coerente em cada tema.

---

## Interacao 8

**Data:** 08/06/2026
**Quem perguntou:** Vitor
**O que foi solicitado:**
"Como integrar as funcionalidades novas (slideshow, quiz, formulario, temas) reaproveitando a landing que ja fizemos em Front-End Design, sem reescrever ela do zero?"

**O que a IA retornou:**
Sugeriu usar o index.html e o styles.css originais como base e SOMENTE adicionar as partes novas: as tres secoes novas (galeria/slideshow, quiz, contato), os botoes de tema no header e o <script type="module">. Reaproveitar as imagens reais que ja existiam no slideshow.

**O que alteramos ou rejeitamos:**
- ACEITAMOS a integracao sobre a landing original (nao criar uma nova).
- APROVEITAMOS que o styles.css original ja usava custom properties no :root, o que deixou a troca de tema encaixar direto.

---

## Interacao 9

**Data:** 08/06/2026
**Quem perguntou:** Vitor
**O que foi solicitado:**
"Como coloco icones nos botoes de troca de tema usando uma biblioteca?"

**O que a IA retornou:**
Sugeriu a biblioteca Font Awesome (via CDN no <head>) com as classes fa-moon (lunar), fa-sun (claro) e fa-circle-half-stroke (alto contraste), usando currentColor pra a cor do icone acompanhar o tema.

**O que alteramos ou rejeitamos:**
- ACEITAMOS a Font Awesome.
- CONFIRMAMOS que uma biblioteca de icones (CSS/webfont) nao conta como framework, entao continua dentro da regra de "JavaScript puro".
