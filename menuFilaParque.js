"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilaDeParque = void 0;
var readlineSync = require("readline-sync");
var FilaDeParque = /** @class */ (function () {
    function FilaDeParque() {
        this.pessoas = [];
    }
    FilaDeParque.prototype.entrarNaFila = function (nome) {
        this.pessoas.unshift(nome);
        console.log("".concat(nome, " entrou na fila."));
    };
    FilaDeParque.prototype.atender = function () {
        if (this.estaVazia()) {
            console.log("fila esta vazia!");
            return undefined;
        }
        var atendido = this.pessoas.pop();
        console.log("".concat(atendido, " foi atendido(a)."));
        return atendido;
    };
    FilaDeParque.prototype.proximaNaFila = function () {
        if (this.estaVazia()) {
            console.log("fila esta vazia!");
            return undefined;
        }
        console.log("Proxima pessoa na fila: ".concat(this.pessoas[this.pessoas.length - 1]));
        return this.pessoas[this.pessoas.length - 1];
    };
    FilaDeParque.prototype.estaVazia = function () {
        return this.pessoas.length === 0;
    };
    FilaDeParque.prototype.tamanho = function () {
        console.log("Tamanho da fila: ".concat(this.pessoas.length));
        return this.pessoas.length;
    };
    return FilaDeParque;
}());
exports.FilaDeParque = FilaDeParque;
// Função para exibir o menu e lidar com as opções do usuário
function mostrarMenu() {
    var fila = new FilaDeParque();
    var opcao;
    do {
        console.log("\n=== Menu Fila de Parque ===");
        console.log("01. Entrar na fila");
        console.log("02. Atender pessoa");
        console.log("03. Ver próxima na fila");
        console.log("04. Verificar se a fila está vazia");
        console.log("05. Ver tamanho da fila");
        console.log("99. Sair");
        var opcao_1 = readlineSync.question("Escolha uma opcao: ");
        switch (opcao_1) {
            case '01':
                var nome = readlineSync.question("Digite o nome da pessoa: ");
                fila.entrarNaFila(nome);
                break;
            case '02':
                fila.atender();
                break;
            case '03':
                fila.proximaNaFila();
                break;
            case '04':
                if (fila.estaVazia()) {
                    console.log("A fila está vazia.");
                }
                else {
                    console.log("A fila não está vazia.");
                }
                break;
            case 5:
                fila.tamanho();
                break;
            case '99':
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
        }
    } while (opcao !== 6);
}
mostrarMenu();
