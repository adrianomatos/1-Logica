// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Informe um número entre 1 e 10:";

let dificuldade = prompt(`Com quantos números vc quer jogar?`);

let listaNumerosSorteados = [];
let numeroLimite = dificuldade;
let numeroSecreto = gerarNumeroAleatorio();
let quantTentativas = 0;

function exibirTextoNaTela(tag, msg) {
	let campo = document.querySelector(tag);
  campo.innerHTML = msg;
  responsiveVoice.speak(msg, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirMsgInicial() {
	exibirTextoNaTela("h1", "Jogo do número secreto!");
  exibirTextoNaTela("p", `Informe um número entre 1 e ${numeroLimite}:`);
}
exibirMsgInicial();


function gerarNumeroAleatorio() {
  // verifica se a lista já está cheia
  if (listaNumerosSorteados.length == numeroLimite) {
    listaNumerosSorteados = [];
    console.log("Lista cheia, foi preciso limpar variáveis");
    return gerarNumeroAleatorio();
  }

  // Ao invés de retornar direto, verifica se está na lista, se não, sorteia outro, aí insere na lista, mostra no log e finalente retorna
  let numeroEscolhido = parseInt(Math.random() * numeroLimite) + 1;

  // Verifica se numeroEscolhido já está na lista
  if (listaNumerosSorteados.includes(numeroEscolhido)) {
    // Gere outro número caso o anterior já esteja na lista
    return gerarNumeroAleatorio();
  } else {
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampoForm() {
  chute = document.querySelector("input");
  chute.value = "";
}

function ativarBotaoNovoJogo() {
  document.getElementById("reiniciar").removeAttribute("disabled");
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampoForm();
  quantTentativas = 0;
  exibirMsgInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  quantTentativas++;
  if (numeroSecreto == chute) {
    let palavraTentativa = quantTentativas > 1 ? "tentativas" : "tentativa";
    exibirTextoNaTela(
      "h1",
      `Você acertou com ${quantTentativas} ${palavraTentativa}`
    );
    exibirTextoNaTela("p", "Parabéns!!!");
    ativarBotaoNovoJogo();
  } else {
    exibirTextoNaTela("h1", `Você errou!`);
    limparCampoForm();
    if (numeroSecreto > chute) {
      exibirTextoNaTela("p", `O número secreto é Maior que seu palpite`);
    } else {
      exibirTextoNaTela("p", `O número secreto é Menor que seu palpite`);
    }
  }
}

// ---------------------------- ARRAYS

// let linguagens = ["JS", "Java", "Python"];

// console.log(`Tamanho do array: ${linguagens.length}`);
// console.log(`Array 0: ${linguagens[0]}`);
// console.log(`Array 1: ${linguagens[1]}`);
// console.log(`Array 2: ${linguagens[2]}`);

// Adicionando:
// frutas.push("Morango");

// Removendo o último elemento:
// frutas.pop();
