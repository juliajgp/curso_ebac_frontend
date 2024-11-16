// Classe abstrata Animal
class Animal {
    constructor(nome, idade) {
        if (this.constructor === Animal) {
            throw new Error("A classe Animal é abstrata e não pode ser instanciada diretamente.");
        }
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        throw new Error("O método emitirSom deve ser implementado pelas subclasses.");
    }
}

// Classe Cachorro herda de Animal
class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    emitirSom() {
        return "Au au!";
    }

    buscarBola() {
        return `${this.nome} está buscando a bola!`;
    }
}

// Classe Gato herda de Animal
class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    emitirSom() {
        return "Miau!";
    }

    escalarMoveis() {
        return `${this.nome} está escalando os móveis!`;
    }
}

// Instâncias dos objetos
const cachorro1 = new Cachorro("Rex", 3, "Labrador");
const gato1 = new Gato("Mia", 2, "Preto");
const cachorro2 = new Cachorro("Bolt", 1, "Pastor Alemão");

// Testando as instâncias
console.log(cachorro1.nome, cachorro1.emitirSom(), cachorro1.buscarBola());
console.log(gato1.nome, gato1.emitirSom(), gato1.escalarMoveis());
console.log(cachorro2.nome, cachorro2.emitirSom(), cachorro2.buscarBola());
