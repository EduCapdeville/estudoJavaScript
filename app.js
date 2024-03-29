let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){ // Criando a função para exibir o texto na tela
    let campo = document.querySelector(tag)// Criando a variavel campo, que vai no document (HTML) e selecionar o query que foi dado entre parenteses no caso a tag html
    campo.innerHTML = texto; // Fazendo com que seja colocado o texto na tag html
}

exibirTextoNaTela('h1', 'Jogo do número secreto'); // Chamando a função exibir texto na tela e dando a tag que ela vai selecionar, nesse caso h1. E passando o texto que vai ser colocado nessa tag.
exibirTextoNaTela('p', 'Jogo do número secreto'); // Chamando a função exibir texto na tela e dando a tag que ela vai selecionar, nesse caso p. E passando o texto que vai ser colocado nessa tag.

function verificarChute() { // Criando a função para verificar o chute
    console.log(numeroSecreto); // Fazendo com que seja printado algo no console sempre que for pressionada a tecla chutar (Olhe o arquivo HTML para entender melhor)
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}