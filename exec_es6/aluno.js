class Alunos {   
    constructor(nome, nota){
        this.nome = nome;
        this.nota = nota;
    }

    showNota(){
        return this.nota;
    }
}

const alunos = [
    new Alunos("Danilo", 10),
    new Alunos("Daniel", 8),
    new Alunos("Daniere", 5),
    new Alunos("Daniele", 6),
    new Alunos("Danila", 7),
    new Alunos("Danilson", 4),
    new Alunos("Douglas", 3),
    new Alunos("Dawnson", 2),
    new Alunos("David", 6)
];
console.log(alunos);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=')

function alunosAprovados(...alunos) {
    const alunosAprovados = alunos.filter((aluno) => {
        return aluno.nota >= 6;
    })
    return alunosAprovados;
}

console.log(alunosAprovados(...alunos));
