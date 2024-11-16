// Função de multiplicação
function multiplicar(a: number, b: number): number {
    return a * b;
}

// Função de saudação
function saudacao(nome: string): string {
    return `Olá ${nome}`;
}

// Exemplo de uso
const resultadoMultiplicacao = multiplicar(5, 3); // 15
const mensagemSaudacao = saudacao("João"); // "Olá João"

console.log("Resultado da multiplicação:", resultadoMultiplicacao);
console.log("Mensagem de saudação:", mensagemSaudacao);
