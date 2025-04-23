// Função que gera uma escolha aleatória para o computador
function gerarEscolhaAleatoria() {
    const min = 1; // Valor mínimo
    const max = 3; // Valor máximo
    // Gera um número aleatório entre 1 e 3
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Exporta a função para uso em outros arquivos
module.exports = { gerarEscolhaAleatoria };