// Função que exibe o menu de opções para o jogador
function exibirMenu() {
    console.log("Escolha uma opção:");
    console.log("1. Pedra");
    console.log("2. Papel");
    console.log("3. Tesoura");
}

// Função que retorna o nome da escolha com base no número
function nomeDaEscolha(escolha) {
    switch (escolha) {
        case 1:
            return "Pedra";
        case 2:
            return "Papel";
        case 3:
            return "Tesoura";
        default:
            return "Escolha inválida"; // Retorna mensagem de erro para escolha inválida
    }
}

// Exporta as funções para uso em outros arquivos
module.exports = { exibirMenu, nomeDaEscolha };