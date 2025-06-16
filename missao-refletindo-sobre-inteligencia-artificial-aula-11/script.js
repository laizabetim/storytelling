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
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
