// Banco das 10 perguntas do quiz AgroLunar.
// Cada pergunta tem: enunciado, 4 opcoes, indice da correta (0-based) e explicacao.
export const perguntas = [
  {
    enunciado: "Quanto custa, em média, levar 1 kg de comida pra Lua hoje?",
    opcoes: ["100 dólares", "10 mil dólares", "1 milhão de dólares", "10 milhões de dólares"],
    correta: 2,
    explicacao: "1 milhão de dólares por kg é o custo médio de payload pra missões lunares atuais."
  },
  {
    enunciado: "Quanto dura um dia lunar em termos de dias terrestres?",
    opcoes: ["24 horas", "1 semana", "29.5 dias terrestres", "1 ano"],
    correta: 2,
    explicacao: "O dia solar lunar tem aproximadamente 29 dias e meio terrestres. 14.7 dias de luz seguidos de 14.7 de escuridão."
  },
  {
    enunciado: "Qual é a latência de comunicação Terra-Lua, ida e volta?",
    opcoes: ["0.5 segundo", "2.5 segundos", "30 segundos", "5 minutos"],
    correta: 1,
    explicacao: "Sinal viaja à velocidade da luz. Distância média Terra-Lua é ~384 mil km, ida e volta dá ~2.5 segundos."
  },
  {
    enunciado: "Qual sistema da NASA cultiva alface na Estação Espacial Internacional?",
    opcoes: ["LunarFarm", "Veggie", "AgriSpace", "GreenStation"],
    correta: 1,
    explicacao: "O sistema Veggie cultiva alface, repolho chinês e mizuna na ISS desde 2014."
  },
  {
    enunciado: "Quanta água a fazenda vertical economiza frente à agricultura tradicional?",
    opcoes: ["10%", "50%", "75%", "95%"],
    correta: 3,
    explicacao: "Sistemas hidropônicos fechados recirculam água, economizando até 95% comparado a plantio em solo."
  },
  {
    enunciado: "Em que ano voou a missão tripulada Artemis II?",
    opcoes: ["2024", "2025", "2026", "2030"],
    correta: 1,
    explicacao: "Artemis II voou em 2025, primeira missão tripulada além da órbita baixa desde 1972."
  },
  {
    enunciado: "Qual microcontrolador usamos no protótipo AgroLunar?",
    opcoes: ["Raspberry Pi", "Arduino UNO", "ESP32", "STM32"],
    correta: 2,
    explicacao: "ESP32 tem WiFi nativo, mais memória e processamento, ideal pra Edge Computing moderno."
  },
  {
    enunciado: "Qual sensor mede umidade e temperatura do ar no projeto?",
    opcoes: ["BMP280", "MQ-135", "DHT22", "MPU6050"],
    correta: 2,
    explicacao: "DHT22 mede temperatura e umidade relativa do ar com boa precisão pra esse uso."
  },
  {
    enunciado: "Qual ODS principal o AgroLunar atende?",
    opcoes: ["ODS 4 - Educação", "ODS 2 - Fome zero", "ODS 7 - Energia limpa", "ODS 14 - Vida na água"],
    correta: 1,
    explicacao: "ODS 2 (fome zero) é o central, com ODS 9 e 13 secundários."
  },
  {
    enunciado: "Qual função matemática usamos pra modelar o ciclo dia/noite lunar?",
    opcoes: ["Logarítmica", "Exponencial", "Polinomial", "Trigonométrica (cosseno)"],
    correta: 3,
    explicacao: "Fenômeno periódico se modela com função trigonométrica. Cosseno tem amplitude, período e offset, todos parâmetros físicos do problema."
  }
];
