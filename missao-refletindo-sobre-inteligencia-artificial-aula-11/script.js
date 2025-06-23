const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Voce consegue lidar bem com o estresse do dia a dia?",
        alternativas: [
            {
                texto: "sim geralmente consigo me manter calmo e equilibrado.",
                afirmacao: "Praticar respiracao profunda e manter uma rotina organizada tem me ajudado a lidar melhor com as pressoes diarias.",
            },
            {
                texto: "As vezes, sinto que o estresse me sobrecarrega.",
                afirmacao: "Tenho percebido que preciso encontrar maneiras mais saudaveis de relaxar e cuidar da saude mental.",
            }
        ]
    },
    {
        enunciado: "Voce costuma reservar um tempo para cuidar da sua saude emocional?",
        alternativas: [
            {
                texto: "Sim, faco atividades que me ajudam a relaxar e me sentir bem.",
                afirmacao: "Praticar exercicios fisicos e meditacao tem sido essencial para manter meu equilibrio emocional.",
            },
            {
                texto: "Ainda nao, mas quero comecas a dedicar mais tempo a isso.",
                afirmacao: "Tenho percebido a importancia de cuidar da minha saude emocional e estou buscando criar uma nova rotina.",
            }
        ]
    },
    {
        enunciado: "Voce se sente confortavel para expressar emocoes e sentimentos?",
        alternativas: [
            {
                texto: "Sim, consigo falar abertamente sobre isso.",
                afirmacao: "Conversar com pessoas de confianca me ajuda a aliviar emocoes e entender melhor meus sentimentos."
            },
            {
                texto: "As vezes sinto que tenho dificuldade em colocar meus sentimentos em palavras.",
                afirmacao: "Estou aprendendo aos poucos a me expressar melhor e reconhecer minhas emocoes com mais clareza."
            }
        ]
    },
    {
        enunciado: "Voce ja buscou ajuda profissional (como piscicologo ou terapeuta) quando sentiu nescecidade?",
        alternativas: [
            {
                texto: "sim, pois procurar ajuda e um sinal de forca.",
                afirmacao: "O acompanhamento piscicologico oferece suporte, um acolhimento para lidar com as emocoes e dificuldades ."
            },
            {
                texto: "Nao, muitas vezes me sentia preso a certas emocoes.",
                afirmacao: "muitas vezes, as pessoas acabam procurando ajuda quando a situacao ja esta muito ruim, o que poderia ser evitado"
            }
        ]
    },
    {
        enunciado: "Voce tem o habito de elogiar a si mesmo ou reconhecer suas qualidades?",
        alternativas: [
            {
                texto: "claro, sempre procuro fazer isso.Infelizmente passou a u",
                afirmacao: "Reconhecer suas conquistas e qualidades, melhora a autoestima e fortalece a saude mental."
            },
            {
                texto: "Nem sempre.",
                afirmacao: "Nao reconhecer suas habilidades ou conquistas, faz parecer a si mesmo insuficiente ou incapaz, prejudicando a autoestima e aumenta a inseguranca emocional. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
