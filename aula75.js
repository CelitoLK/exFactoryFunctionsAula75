// Factory function (função fábrica)

/*
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} ${this.sobrenome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Maria', 'Aline', 1.65, 50);
console.log(p1.imc());
const p2 = criaPessoa('Oli', 'Veira', 1.70, 80);
console.log(p1.fala('falando sobre JS'));
*/

// Constructor funcion (função construtora)

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto (valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto = 'está falando sobre viagens') {
            return `${this.nome} ${this.sobrenome} está ${assunto}.`;
        },
        altura: a,
        peso: p,

        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Maria', 'Aline', 1.65, 50);
const p2 = criaPessoa('Augusta', 'Rua', 1.75, 80);
const p3 = criaPessoa('Uberlândia', 'Cine', 1.80, 120);
//p1.nomeCompleto = 'Oli Veira Mar';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);
console.log(p1.fala());

console.log(p2.nomeCompleto);
console.log(p2.nome);
console.log(p2.sobrenome);
console.log(p2.imc);
console.log(p2.fala());

console.log(p3.nomeCompleto);
console.log(p3.nome);
console.log(p3.sobrenome);
console.log(p3.imc);
console.log(p3.fala());