// CheckPoint 3 - Digital House - Aluno: Rafael Longobardi Mineiro Varela Professor: Marcos Santana
let Aluno = require('./alunos');
let Curso = {
    nomeCurso: 'JavaScript',
    notaAprovacao: 7,
    faltasMaxima: 2,
    estudantes: [],
    adicionarAluno: (nome, faltas, notas) => {
    Curso.estudantes.push(new Aluno(nome, faltas, notas))
    },

    mediaNotaAlunos: obj => {
        let arrayMedias = obj.map(e => e.calcularMedia());
        let somaMedias = 0;
        for (let i = 0; i < arrayMedias.length; i++) {
            somaMedias += arrayMedias[i] / arrayMedias.length;
        };
        console.log(`A média total de notas dos alunos é ${somaMedias.toFixed(2)}.`);
    },

    adicionarFalta: (obj, nome) => {
        let aluno = obj.filter(e => e.nome == nome);
        console.log(`O aluno ${nome} tem ${aluno[0].faltas} falta(s).`)
        aluno[0].adiconarFaltas()
        console.log(`Adicionada falta para o aluno ${nome}. Número de falta(s) atual: ${aluno[0].faltas}.`)
    },

    aprovado: (obj, nome) => {
        let aluno = obj.filter(e => e.nome == nome);
        let mediaAluno = aluno.map(e => e.calcularMedia());
        mediaAluno = mediaAluno[0].toFixed(2)
        let faltaAluno = aluno.map(e => e.faltas)
        if (mediaAluno >= Curso.notaAprovacao && faltaAluno < Curso.faltasMaxima
            ||
            faltaAluno == Curso.faltasMaxima && mediaAluno > Curso.notaAprovacao / 10 + Curso.notaAprovacao) {
            console.log(`O aluno(a) ${nome} foi aprovado(a). Média: ${mediaAluno} / Faltas: ${faltaAluno}`);
        } else {
            console.log(`O aluno(a) ${nome} foi reprovado(a). Média: ${mediaAluno} / Faltas: ${faltaAluno}`);
        };
    },
    
    listaAprovacao: obj => {
        let listaAprovacao = [];
        obj.map(e => {
            if (e.calcularMedia() >= Curso.notaAprovacao && e.faltas < Curso.faltasMaxima
                ||
                e.faltas == Curso.faltasMaxima && e.calcularMedia() > Curso.notaAprovacao / 10 + Curso.notaAprovacao) {
                listaAprovacao.push(`${e.nome}: Aprovado`);
            } else {
                listaAprovacao.push(`${e.nome}: Reprovado`);
            }
        });
        console.log(listaAprovacao);
    }
};

module.exports = Curso;