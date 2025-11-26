const perguntas = [
    { pergunta: "qual dos meios abaixo é uma má prática de estudos", imagem: "",
      opcoes: ["Aulas Interativas com Simuladores e Plataformas", "PDFs de artigos", "Mapas Mentais Digitais", "Berlim"], correta: 1,
      explicacao: "A pessoa abre o PDF no celular ou computador e só fica rolando para baixo não apreendendo." },
    { pergunta: "No início dos tempos históricos, a relação entre o homem e a natureza era marcada principalmente por:", imagem: "",
      opcoes: [" Dominação e exploração intensiva do ambiente", "Competição entre grupos humanos pelo domínio do território", "Convivência e adaptação ao meio natural", "Uso de máquinas para reorganizar o espaço"], correta: 2,
      explicacao: "Marte é chamado de Planeta Vermelho por causa da cor de sua superfície rica em ferro oxidado." },
    { pergunta: "a mudança na relação entre humanidade e natureza ocorre quando:", imagem: "",
      opcoes: ["Surge a agricultura comercial", "A racionalidade humana começa a transformar e instrumentalizar o ambiente", "Os cataclismos naturais se tornam mais frequentes", "As populações começam a migrar para áreas urbanas"], correta: 0,
      explicacao: "O elefante africano é o maior animal terrestre." },
    { pergunta: "o ser humano passa a ser um “fator geológico e climático” porque?", imagem: "",
      opcoes: ["Passa a prever catástrofes naturais com precisão", "Sua ação torna-se capaz de alterar a natureza continuamente", "Deixa de depender dos recursos naturais", "Aumenta sua resistência a condições climáticas extremas"], correta: 0,
      explicacao: "A Mona Lisa foi pintada por Leonardo da Vinci no início do século XVI." },
    { pergunta: "Em comparação com cataclismos naturais, os impactos da ação humana são descritos como:", imagem: "",
      opcoes: ["Momentâneos e pouco significativos", "Ocasionais e imprevisíveis", "Permanentes, cumulativos e intensificados pelo modo de vida", "Exclusivamente benéficos para a natureza"], correta: 2,
      explicacao: "A letra 'O' na Tabela Periódica representa o Oxigênio." },
    { pergunta: "O processo de globalização dos recursos naturais ocorreu devido:", imagem: "",
      opcoes: ["À expansão dos Estados nacionais", "Ao avanço das relações comerciais e à circulação de mercadorias", "Ao crescimento das populações nômades", "Ao isolamento dos grupos humanos"], correta: 2,
      explicacao: "O Oceano Pacífico é o maior e mais profundo oceano da Terra." },
    { pergunta: "Quem foi o primeiro homem a pisar na Lua?", imagem: "",
      opcoes: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"], correta: 0,
      explicacao: "Neil Armstrong pisou na Lua em 20 de julho de 1969, na missão Apollo 11." },
    { pergunta: "Qual é o país com a maior população do mundo?", imagem: "",
      opcoes: ["China", "Índia", "EUA", "Indonésia"], correta: 1,
      explicacao: "Desde 2023, a Índia superou a China e passou a ser o país mais populoso." },
    { pergunta: "Qual é o maior deserto do mundo?", imagem: "",
      opcoes: ["Saara", "Antártida", "Gobi", "Kalahari"], correta: 1,
      explicacao: "A Antártida é considerada o maior deserto do mundo, pois quase não chove lá." },
    { pergunta: "Em que continente fica o Egito?", imagem: "",
      opcoes: ["África", "Ásia", "Europa", "América"], correta: 0,
      explicacao: "O Egito está localizado no nordeste da África, com parte no Oriente Médio." }
  ];

  let indice = 0;
  let respostasUsuario = new Array(perguntas.length).fill(null);
 
  const textoPergunta = document.getElementById("textoPergunta");
  const imgPergunta = document.getElementById("imgPergunta");
  const opcoesDiv = document.getElementById("opcoes");
  const quizDiv = document.getElementById("quiz");
  const resultadoDiv = document.getElementById("resultado");
  const gabaritoDiv = document.getElementById("gabarito");
  const pontuacaoTexto = document.getElementById("pontuacaoTexto");
  const listaGabarito = document.getElementById("listaGabarito");

  function mostrarPergunta() {
    const atual = perguntas[indice];
    textoPergunta.textContent = `${indice + 1}. ${atual.pergunta}`;
    if (atual.imagem) {
      imgPergunta.src = atual.imagem;
      imgPergunta.style.display = "block";
    } else {
      imgPergunta.style.display = "none";
    }

    opcoesDiv.innerHTML = "";
    atual.opcoes.forEach((opcao, i) => {
      const btn = document.createElement("button");
      btn.className = "btn btn-outline-primary";
      btn.textContent = opcao;
      btn.onclick = () => selecionarOpcao(i);
      opcoesDiv.appendChild(btn);
    });

    
    if (respostasUsuario[indice] !== null) {
      const botoes = opcoesDiv.querySelectorAll("button");
      botoes.forEach(b => b.classList.add("btn-outline-primary"));
      const i = respostasUsuario[indice];
      botoes[i].classList.remove("btn-outline-primary");
      botoes[i].classList.add("btn-dark" );
    }
    prox = document.getElementById("proxima")
    volta = document.getElementById("voltar")
      if(indice === 9){
        prox.classList.remove("btn-primary");
        prox.classList.add("btn-warning")
        prox.textContent = "Finalizar"}
      else{
        prox.classList.remove("btn-warning");
        prox.classList.add("btn-primary") 
        prox.textContent = "Próxima" }
    
    volta.style.visibility = (indice === 0) ? "hidden" : "visible"
      
   }

  function selecionarOpcao(i) {
    respostasUsuario[indice] = i; 
    mostrarPergunta();
  }

  document.getElementById("proxima").onclick = () => {
    if (indice < perguntas.length - 1) {
      indice++;
      mostrarPergunta();
    } else {
      finalizarQuiz();
    }
  };

  document.getElementById("voltar").onclick = () => {
    if (indice > 0) {
      indice--;
      mostrarPergunta();
    }
  };

  function finalizarQuiz() {
    let acertos = 0;
    respostasUsuario.forEach((resp, i) => {
      if (resp === perguntas[i].correta) acertos++;
    });

    quizDiv.style.display = "none";
    resultadoDiv.style.display = "block";
    pontuacaoTexto.textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
  }

  document.getElementById("verGabarito").onclick = () => {
  resultadoDiv.style.display = "none";
  gabaritoDiv.style.display = "block";
  listaGabarito.innerHTML = "";

  perguntas.forEach((p, i) => {
    const resp = respostasUsuario[i];          
    const correta = p.correta;                 
    const acertou = resp === correta;          
    const textoUsuario = resp === null ? '<span class="text-muted">Não respondida</span>' : `<strong>${p.opcoes[resp]}</strong>`;
    
    const icone = resp === null ? ''  : (acertou ? '<i class="bi bi-check-circle text-success ms-2" title="Acertou"></i>' : '<i class="bi bi-x-circle text-danger ms-2" title="Errou"></i>');

    const item = document.createElement("li");
    item.className = "list-group-item";

    item.innerHTML = `
      <div class="d-flex justify-content-between align-items-start">
        <div>
          <strong>${i + 1}. ${p.pergunta}</strong><br>
          <small>Sua escolha: ${textoUsuario} ${icone}</small><br>
          <small>Resposta correta: <span class="text-success">${p.opcoes[correta]}</span></small>
        </div>
      </div>
      <div class="mt-2"> Explicação: ${p.explicacao}</div>
    `;

    listaGabarito.appendChild(item);
  });
};

    

  function reiniciar() {
    indice = 0;
    respostasUsuario.fill(null);
    gabaritoDiv.style.display = "none";
    quizDiv.style.display = "block";
    mostrarPergunta();
  }

  mostrarPergunta();