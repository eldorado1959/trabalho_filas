
class PilhaDeLivros {
    private pilha: string[] = [];

    // Adiciona um livro ao topo da pilha
    adicionarLivro(livro: string): void {
        this.pilha.push(livro);
        console.log(`Livro '${livro}' adicionado à pilha.`);
    }

    // Remove e retorna o livro do topo da pilha
    retirarLivro(): string | undefined {
        if (!this.estaVazia()) {  // Verifica se pilha nao esta vazia
            const livro = this.pilha.pop(); // Remove e armazena o livro do topo
            console.log(`Livro '${livro}' retirado da pilha.`);
            return livro; // retorna livro retirado
        } else {
            console.log("pilha de livros esta vazia.");
            return undefined; // rtorna caso nao tenha livros na pilha
        }
    }

    // Verifica se a pilha está vazia
    estaVazia(): boolean {
        return this.pilha.length === 0;  //verifica array que representa a pilha de livros se esta vazio
    }

    // Retorna o número de livros na pilha
    tamanho(): number {
        return this.pilha.length;
    }
}

// Criando uma instância da classe PilhaDeLivros
const pilhaDeLivros = new PilhaDeLivros();

// Adicionando 3 livros à pilha
pilhaDeLivros.adicionarLivro("LIVRO 01");
pilhaDeLivros.adicionarLivro("LIVRO 02");
pilhaDeLivros.adicionarLivro("O Pequeno Príncipe");

// Verificando o tamanho da pilha
console.log(`Número de livros na pilha: ${pilhaDeLivros.tamanho()}`);

// Realizando algumas retiradas de livros
pilhaDeLivros.retirarLivro();
pilhaDeLivros.retirarLivro();

// Verificando se a pilha está vazia
console.log(`A pilha de livros está vazia? ${pilhaDeLivros.estaVazia()}`);

// Verificando o tamanho da pilha novamente
console.log(`Quantidade de livros na pilha: ${pilhaDeLivros.tamanho()}`);






