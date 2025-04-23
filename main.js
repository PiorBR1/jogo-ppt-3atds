const readline = require('readline-sync');
const { exibirMenu, nomeDaEscolha } = require('./jogo/opcoes');
const { gerarEscolhaAleatoria } = require('./jogo/computador');
const { determinarResultado } = require('./jogo/resultado');

// Função principal que inicia o jogo
function jogar() {
    console.log("Bem-vindo ao Jogo de Pedra, Papel e Tesoura");

    let continuar = true; // Variável para controlar se o jogo deve continuar

    // Loop que permite jogar várias rodadas
    while (continuar) {
        exibirMenu(); // Exibe as opções de jogo

        // Coleta a escolha do jogador
        const escolhaJogador = readline.questionInt("Escolha uma opcao (1-3): ");
        const escolhaComputador = gerarEscolhaAleatoria(); // Gera a escolha do computador

        // Exibe as escolhas do jogador e do computador
        console.log(`Você escolheu: ${nomeDaEscolha(escolhaJogador)}`);
        console.log(`O computador escolheu: ${nomeDaEscolha(escolhaComputador)}`);

        // Determina o resultado da rodada
        const resultado = determinarResultado(escolhaJogador, escolhaComputador);
        console.log(resultado); // Exibe o resultado

        // Pergunta se o usuário deseja continuar jogando
        const resposta = readline.question("Quer continuar? (s/n): ");
        continuar = resposta.toLowerCase() === 's'; // Atualiza a variável de controle
    }

    console.log("Obrigado por ter jogado"); // Mensagem de despedida
}

// Inicia o jogo
jogar();