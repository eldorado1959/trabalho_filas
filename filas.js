"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fila = void 0;
var Fila = /** @class */ (function () {
    function Fila() {
        this.elementos = [];
    }
    //adicionar um elemento no fim da fila
    Fila.prototype.enfileirar = function (item) {
        this.elementos.push(item);
    };
    //remover e retornar o primeiro elemento
    Fila.prototype.desenfileirar = function () {
        if (this.estaVazia()) {
            console.log("A fila está vazia");
            return undefined;
        }
        else {
            return this.elementos.shift();
        }
    };
    //retornar o primeiro elemento
    Fila.prototype.primeiro = function () {
        if (this.estaVazia()) {
            console.log("A fila está vazia");
            return undefined;
        }
        else {
            return this.elementos[0];
        }
    };
    //metodo isEmpty
    Fila.prototype.estaVazia = function () {
        return this.elementos.length === 0;
    };
    //metodo size
    Fila.prototype.tamanho = function () {
        return this.elementos.length;
    };
    return Fila;
}());
exports.Fila = Fila;
var filaDeClientes = new Fila();
filaDeClientes.enfileirar("Cliente 1");
filaDeClientes.enfileirar("Cliente 2");
filaDeClientes.enfileirar("Cliente 3");
console.log("Pr\u00F3ximo: ".concat(filaDeClientes.desenfileirar()));
console.log("Pr\u00F3ximo: ".concat(filaDeClientes.desenfileirar()));
console.log("Pr\u00F3ximo: ".concat(filaDeClientes.desenfileirar()));
console.log("Pr\u00F3ximo: ".concat(filaDeClientes.desenfileirar()));
console.log("A fila est\u00E1 vazia?: ".concat(filaDeClientes.estaVazia()));
