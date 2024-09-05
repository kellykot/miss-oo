const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Qual é a melhor abordagem para reduzir o impacto ambiental das atividades humanas?",
        alternativas: [
            {
                texto: "Investir em tecnologias verdes",
                afirmacao: "Tecnologias verdes, como painéis solares e turbinas eólicas, ajudam a reduzir a dependência de fontes de energia fósseis e diminuem a emissão de gases de efeito estufa."
            },
            {
                texto: "Promover a redução do consumo e o estilo de vida minimalista.",
                afirmacao: "Adotar um estilo de vida minimalista reduz a demanda por recursos naturais e diminui a geração de resíduos, promovendo um consumo mais consciente e sustentável."
            }
           
        ]
    },
    {
        enunciado: "Qual papel as políticas governamentais desempenham na proteção ambiental?",
        alternativas: [
            {
                texto: " Implementar regulamentações rigorosas sobre poluição e emissões.",
                afirmacao: "Regulamentações rigorosas ajudam a controlar e reduzir a poluição industrial e as emissões de gases, forçando empresas a adotar práticas mais limpas e sustentáveis."
            },
            {
                texto: "Incentivar a educação ambiental e a conscientização pública.",
                afirmacao: "Educação e conscientização aumentam a compreensão pública sobre questões ambientais e incentivam comportamentos mais sustentáveis, contribuindo para a proteção do meio ambiente a longo prazo."
            }
           
        ]
    },
    {
        enunciado: "O que é mais eficaz para a conservação da biodiversidade?",
        alternativas: [
            {
                texto: "Criar e manter áreas protegidas e reservas naturais",
                afirmacao:"Áreas protegidas servem como refúgios para espécies ameaçadas e preservam habitats naturais, ajudando a manter a biodiversidade e os ecossistemas intactos."
            },
            {
                texto: "Promover práticas agrícolas e pesqueiras sustentáveis.",
                afirmacao:"Práticas sustentáveis na agricultura e na pesca evitam a degradação de habitats e a sobreexploração de recursos, ajudando a conservar a biodiversidade e a saúde dos ecossistemas."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta () {
   if (atual >= perguntas. length) i
      mostraResultado () ;
      return;
   }
   perguntaAtual = perguntas [atual];
   caixaPerguntas. textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   textoResultado.textContent = "";
   mostraAlternativas () ;
}

function mostraAlternativas (){
   for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document. createElement ("button") ;
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener ("click", ()=>
respostaSelecionada (alternativa) );
    caixaAlternativas.appendChild (botaoAlternativa);
   }
}
function respostaSelecionada (opcaoSelecionada) 1
   const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++
    mostraPergunta () ;
}

function mostraResultado () }
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
   mostraPergunta();