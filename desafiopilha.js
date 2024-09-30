var PilhaDeLivros = /** @class */ (function () {
    function PilhaDeLivros() {
        this.pilha = [];
    }
    // Adiciona um livro ao topo da pilha
    PilhaDeLivros.prototype.adicionarLivro = function (livro) {
        this.pilha.push(livro);
        console.log("Livro '".concat(livro, "' adicionado \u00E0 pilha."));
    };
    // Remove e retorna o livro do topo da pilha
    PilhaDeLivros.prototype.retirarLivro = function () {
        if (!this.estaVazia()) {
            var livro = this.pilha.pop();
            console.log("Livro '".concat(livro, "' retirado da pilha."));
            return livro;
        }
        else {
            console.log("Pilha de livros está vazia.");
            return undefined;
        }
    };
    // Verifica se a pilha está vazia
    PilhaDeLivros.prototype.estaVazia = function () {
        return this.pilha.length === 0;
    };
    // Retorna o número de livros na pilha
    PilhaDeLivros.prototype.tamanho = function () {
        return this.pilha.length;
    };
    return PilhaDeLivros;
}());
// Criando uma instância da classe PilhaDeLivros
var pilhaDeLivros = new PilhaDeLivros();
// Lista de livros a serem adicionados
var livrosParaAdicionar = ["LIVRO01", "LIVRO02", "LIVRO03", "LIVRO04"];
// Loop para adicionar os livros à pilha
console.log("Adicionando livros a pilha:");
for (var _i = 0, livrosParaAdicionar_1 = livrosParaAdicionar; _i < livrosParaAdicionar_1.length; _i++) {
    var livro = livrosParaAdicionar_1[_i];
    pilhaDeLivros.adicionarLivro(livro);
}
// Verificando o tamanho da pilha após as adições
console.log("N\u00FAmero de livros na pilha ap\u00F3s adicionar: ".concat(pilhaDeLivros.tamanho()));
// Loop para retirar livros da pilha até que ela esteja vazia
console.log("Retirando livros da pilha:");
for (var i = pilhaDeLivros.tamanho(); i > 0; i--) {
    pilhaDeLivros.retirarLivro();
}
// Verificando se a pilha está vazia após todas as retiradas
console.log("A pilha est\u00E1 vazia ap\u00F3s as retiradas? ".concat(pilhaDeLivros.estaVazia()));
