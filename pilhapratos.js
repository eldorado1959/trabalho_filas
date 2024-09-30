"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PilhaDePratos = void 0;
var PilhaDePratos = /** @class */ (function () {
    function PilhaDePratos() {
        this.pratos = [];
    }
    //add e retorna num log o prato no topo
    PilhaDePratos.prototype.addPrato = function (prato) {
        this.pratos.push(prato);
        console.log("".concat(prato, " foi colocado no topo da pilha!"));
    };
    // remove e retorna o prato do topo
    PilhaDePratos.prototype.retirarPrato = function () {
        var prato = this.pratos.pop();
        if (prato) {
            console.log("".concat(prato, " foi removido do topo da pilha"));
        }
        else {
            console.log("A pilha est\u00E1 vazia.");
        }
        return prato;
    };
    //verificar se está vazio
    PilhaDePratos.prototype.isEmpty = function () {
        return this.pratos.length === 0;
    };
    //verifica a quantidade de elementos
    PilhaDePratos.prototype.size = function () {
        return this.pratos.length;
    };
    return PilhaDePratos;
}());
exports.PilhaDePratos = PilhaDePratos;
var pilhaDePratos = new PilhaDePratos();
pilhaDePratos.addPrato('Prato 1');
pilhaDePratos.addPrato('Prato 2');
pilhaDePratos.addPrato('Prato 3');
pilhaDePratos.retirarPrato();
pilhaDePratos.retirarPrato();
console.log("A pilha de pratos est\u00E1 vazia? ".concat(pilhaDePratos.isEmpty()));
console.log("Tamanho da pilha: ".concat(pilhaDePratos.size()));
