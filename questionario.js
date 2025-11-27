    const perguntas = [
    { pergunta: "Um dos objetivos da educação climática digital é ajudar o aluno a…", imagem: "",
      opcoes: ["Aprender sobre o clima", "Reciclar o lixo doméstico", "Utilizar menos mais plástico", "Entender como suas ações podem impactar o ambiente"], correta: 3,
      explicacao: "Quando o aluno entende o clima e o meio ambiente, reconhece como pequenas atitudes podem gerar grandes impactos." },

    
      { pergunta: "No início da história humana, a relação com a natureza era marcada por…", imagem: "",
      opcoes: ["Adaptação ao meio e uso apenas do necessário", " Comércio global de recursos naturais", "Tentativas permanentes de reorganizar o ambiente", "Tentativa de dominar totalmente o ambiente"], correta: 0,
      explicacao: "No começo, os grupos humanos apenas se adaptavam ao ambiente e retiravam dele o essencial para sua sobrevivência." }, 
    
      { pergunta: "A mudança na relação entre humanidade e natureza ocorre quando:", imagem: "",
      opcoes: ["A natureza deixa de ter qualquer importância prática para a sociedade", "O ambiente passa a ser compreendido apenas como cenário fixo", "A racionalidade humana passa a transformar e direcionar o ambiente", "As ferramentas passam a substituir totalmente o trabalho humano"], correta: 2,
      explicacao: "A mudança se dá quando o ser humano começa a moldar o ambiente conscientemente, transformando-o segundo seus próprios objetivos." },
    
      { pergunta: "Um aspecto que diferencia a ação humana de eventos naturais é que:", imagem: "",
      opcoes: ["As ações humanas são extremamente rápidas e isoladas", "O impacto humano tende a se ampliar com o modo de vida adotado", "Fenômenos naturais sempre deixam efeitos mais duradouros", "A intervenção humana nunca altera o clima"], correta: 1,
      explicacao: "A ação humana gera efeitos acumulativos, que aumentam conforme o estilo de vida moderno — diferente de eventos naturais, que são pontuais." },
    
      { pergunta: "Quando o comércio entre regiões aumenta, ocorre que:", imagem: "",
      opcoes: ["Cada grupo passa a depender apenas de recursos locais", "A natureza se fragmenta ainda mais entre diferentes sociedades", "A troca de mercadorias diminui a importância da natureza", "Recursos antes restritos começam a circular entre diferentes espaços"], correta: 3,
      explicacao: "O comércio amplia o acesso a recursos naturais, conectando regiões antes independentes e permitindo a circulação de bens." },
    
      { pergunta: "O ser humano torna-se um agente geológico e climático quando:", imagem: "",
      opcoes: ["Cataclismos naturais tornam-se mais frequentes que intervenções humanas", "Ele passa a evitar intervenções diretas na paisagem", "Sua ação provoca alterações contínuas e cumulativas no ambiente","Seu impacto deixa de gerar mudanças perceptíveis na natureza"], correta: 2,
      explicacao: "O ser humano é considerado um agente geológico e climático porque sua ação provoca mudanças duradouras e acumulativas na dinâmica da natureza." },
    
      { pergunta: "Algumas campanhas governamentais falam para economizar água, mas segundo este gráfico a campanha faz sentido", imagem: "Imagens/grafico.png",
      opcoes: ["Reduzir o uso doméstico pode resolver quase todo o desperdício hídrico, já que é o maior consumo.", "A indústria é o setor que mais usa água, portanto deve ser o único alvo de políticas públicas.", "A agricultura não tem impacto relevante no uso da água, aparecendo como o setor menos dependente desse recurso.", "Focar apenas no consumo doméstico não reduz significativamente o total, pois esse setor representa a menor parcela no gráfico."], correta: 3,
      explicacao: "o uso doméstico é apenas 10%, então focar só nele não terá grande impacto." },
    
      { pergunta: "Quando a educação ambiental apresenta o futuro do planeta de forma exageradamente catastrófica, qual pode ser uma consequência psicológica para os estudantes?", imagem: "",
      opcoes: ["Aumento automático do engajamento ambiental, já que o medo sempre motiva a ação.", "Redução da preocupação ambiental, pois as pessoas deixam de acreditar que o problema é real.", "Sensação de impotência, levando à ideia de que nada do que façam importa e, portanto, à inação.", "Crescimento do otimismo, pois as previsões assustadoras geram confiança na reversão dos problemas."], correta: 2,
      explicacao: "O excesso de discurso catastrófico pode gerar ecoansiedade e a sensação de que o futuro está “decidido”, o que leva à paralisia comportamental — as pessoas acreditam que nada pode ser feito e param de agir." },
    
      { pergunta: "Para compreender o clima pela internet de modo mais aprofundado, qual recurso oferece a análise mais completa dos fenômenos atmosféricos?", imagem: "",
      opcoes: ["Mapas interativos, pois permitem visualizar padrões espaciais em tempo real.", "Séries históricas, pois revelam tendências e variações ao longo de décadas.", "Cursos em vídeo, pois explicam conceitos com linguagem acessível e guiada.", "Simuladores climáticos, pois permitem testar cenários e entender causas e efeitos."], correta: 3,
      explicacao: "simuladores climáticos permitem testar cenários e entender como variáveis interagem, oferecendo profundidade que vídeos, mapas e séries não alcançam." },
    
      { pergunta: "Ao aprender sobre clima na internet, qual atitude mostra que o estudante está usando educação climática digital de forma responsável, mesmo sem perceber?", imagem: "",
      opcoes: ["Ler apenas resumos curtos para evitar informações conflitantes.", "Compartilhar qualquer dado climático que pareça urgente.", "Conferir a fonte antes de acreditar em um gráfico ou notícia.", "Evitar temas complexos para não ficar confuso."], correta: 2,
      explicacao: "A educação climática digital responsável é analisar criticamente o que encontramos online. Verificar fontes e dados para evitar espalhar informações falsas — um dos maiores problemas atuais." }
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
        let quantidade = respostasUsuario.filter(item => item === null).length;
        let marcou = "Deseja mesmo finalizar o quiz?"
        if(quantidade > 0)
            marcou += " Você ainda não marcou "+ quantidade + (quantidade === 1 ? " questão" : " questões");
        let confirmou = confirm(marcou)
        if(confirmou)
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