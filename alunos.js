// CheckPoint 3 - Digital House - Aluno: Henrique Vilela da Fonseca Professor: Marcos Santana
class Aluno {
    constructor(nome, faltas, notas) {
        this.nome = nome;
        this.faltas = faltas;
        this.notas = notas;
        this.calcularMedia = () => {
            let media = this.notas.reduce((acc, cur) => {
            return acc + cur;
            }, 0);
            media = media / this.notas.length;
            return media;
        };
        this.adiconarFaltas = () => {
            this.faltas++;
        }
    };
};
module.exports = Aluno;