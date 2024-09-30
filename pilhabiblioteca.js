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
        if (!this.estaVazia()) { // Verifica se pilha nao esta vazia
            var livro = this.pilha.pop(); // Remove e armazena o livro do topo
            console.log("Livro '".concat(livro, "' retirado da pilha."));
            return livro; // retorna livro retirado
        }
        else {
            console.log("pilha de livros esta vazia.");
            return undefined; // rtorna caso nao tenha livros na pilha
        }
    };
    // Verifica se a pilha está vazia
    PilhaDeLivros.prototype.estaVazia = function () {
        return this.pilha.length === 0; //verifica array que representa a pilha de livros se esta vazio
    };
    // Retorna o número de livros na pilha
    PilhaDeLivros.prototype.tamanho = function () {
        return this.pilha.length;
    };
    return PilhaDeLivros;
}());
// Criando uma instância da classe PilhaDeLivros
var pilhaDeLivros = new PilhaDeLivros();
// Adicionando 3 livros à pilha
pilhaDeLivros.adicionarLivro("LIVRO 01");
pilhaDeLivros.adicionarLivro("LIVRO 02");
pilhaDeLivros.adicionarLivro("O Pequeno Príncipe");
// Verificando o tamanho da pilha
console.log("N\u00FAmero de livros na pilha: ".concat(pilhaDeLivros.tamanho()));
// Realizando algumas retiradas de livros
pilhaDeLivros.retirarLivro();
pilhaDeLivros.retirarLivro();
// Verificando se a pilha está vazia
console.log("A pilha de livros est\u00E1 vazia? ".concat(pilhaDeLivros.estaVazia()));
// Verificando o tamanho da pilha novamente
console.log("Quantidade de livros na pilha: ".concat(pilhaDeLivros.tamanho()));
