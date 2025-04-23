// Função que determina o resultado do jogo com base nas escolhas do jogador e do computador
function determinarResultado(jogador, computador) {
    // Verifica se houve empate
    if (jogador === computador) {
        return "Eita, Deu empate";
    } 
    // Verifica as condições de vitória do jogador
    else if (
        (jogador === 1 && computador === 3) || // Pedra vence Tesoura
        (jogador === 2 && computador === 1) || // Papel vence Pedra
        (jogador === 3 && computador === 2)    // Tesoura vence Papel
    ) {
        return "O, tu venceu de uma maquina brabo"; // Retorna a  mensagem que o jogador venceu
    } else {
        return "Ih, perdeu pra maquina, mais sorte na proxima"; // Retorna a mensagem  que o jogador perdeu
    }
}

// Exporta a função para uso em outros arquivos
module.exports = { determinarResultado };