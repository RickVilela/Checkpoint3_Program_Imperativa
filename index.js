// CheckPoint 3 - Digital House - Aluno: Henrique Vilela da Fonseca Professor: Marcos Santana
let Curso = require('./curso');
Curso.adicionarAluno('Rafael Longobardi Mineiro Varela', 1, [10, 9, 9]);

Curso.adicionarAluno('Henrique Vilela', 2, [10, 10, 10]);

Curso.adicionarAluno('Diego Junior', 3, [5, 5, 5]);

Curso.adicionarAluno('Guilherme Vieira', 1, [7, 7, 10]);

Curso.adicionarAluno('Filipe Teles', 4, [7, 7, 8]);

Curso.adicionarAluno('André Souza', 2, [9, 5, 3]);

Curso.adicionarAluno('Willians Martins', 3, [10, 10, 3]);

Curso.adicionarAluno('Arnaldo Frangetto', 1, [5, 8, 10]);

Curso.adicionarAluno('Aristeu Aprigio', 5, [7, 4, 8]);

Curso.adicionarAluno('Valter Reis', 8, [6, 6, 6]);

Curso.mediaNotaAlunos(Curso.estudantes);

Curso.adicionarFalta(Curso.estudantes, 'Rafael Longobardi Mineiro Varela');

Curso.aprovado(Curso.estudantes, 'Henrique Vilela');

Curso.listaAprovacao(Curso.estudantes);