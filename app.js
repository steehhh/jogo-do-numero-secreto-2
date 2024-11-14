let ListaNumerosSorteados = [];                                                        
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do Numero secreto!");
    exibirTextoNaTela("p", "Escolha um Numero entre 1 a 10:");
}

    exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector ("input").value
    console.log(chute == gerarNumeroAleatorio);

    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        let mensagemTentativas = `Você descobriu o Numero Secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela ("p", "O Numero Secreto é Menor!");
        } else {
            exibirTextoNaTela("p", "O Numero Secreto é Maior!");
        }
        tentativas++
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = ListaNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        ListaNumerosSorteados = [];
    }

    if (ListaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        ListaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function ReinicarJogo() {
    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);

}