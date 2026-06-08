# AgroLunar - Web Development (FIAP GS 2026.1)

Landing page interativa do **AgroLunar**, sistema de cultivo hidropônico autônomo para a base lunar do programa Artemis da NASA (e fazendas verticais urbanas na Terra).

Feito com **HTML + CSS + JavaScript puro** (sem frameworks), organizado em ES Modules.

## Funcionalidades

- **Slideshow** com 3 imagens, botões anterior/próximo e auto-avanço (5s).
- **Formulário** com validação (não envia campos vazios e valida o email).
- **Quiz** dinâmico de 10 perguntas com pontuação e tela de resultado.
- **3 temas** de cor (Lunar, Claro, Alta visibilidade), com preferência salva no `localStorage`.

## Como rodar

Por usar ES Modules (`<script type="module">`), o navegador **bloqueia abrir o `index.html` direto via `file://`** (erro de CORS). Use um servidor local:

```bash
# opção 1: extensão Live Server no VS Code (clique em "Go Live")

# opção 2: Python
python -m http.server 8000
# depois abra http://localhost:8000

# opção 3: Node
npx serve
```

## Estrutura

```
.
├── index.html
├── src/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js         (entry point)
│   │   ├── slideshow.js
│   │   ├── formulario.js
│   │   ├── quiz.js
│   │   ├── perguntas.js    (banco das 10 perguntas)
│   │   └── temas.js
│   └── img/                (imagens da pagina)
├── equipe.txt
└── AI.md                   (registro de uso de IA)
```

## Equipe

| Nome | RM |
|---|---|
| Robert Josino | RM571622 |
| Ryan Maick | RM573051 |
| Vitor Borin | RM573194 |
