// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: "João", nota: 5.5 },
    { nome: "Maria", nota: 8.0 },
    { nome: "Pedro", nota: 6.0 },
    { nome: "Ana", nota: 9.2 },
    { nome: "Lucas", nota: 4.7 },
];

// Função que retorna apenas os alunos com nota maior ou igual a 6
function filtrarAprovados(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
}

// Chamando a função e armazenando o resultado
const alunosAprovados = filtrarAprovados(alunos);

// Exibindo os alunos aprovados
console.log("Alunos aprovados:", alunosAprovados);
