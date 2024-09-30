

class PilhaDeLivros {
    private pilha: string[] = [];

    // Adiciona um livro ao topo da pilha
    adicionarLivro(livro: string): void {
        this.pilha.push(livro);
        console.log(`Livro '${livro}' adicionado à pilha.`);
    }

    // Remove e retorna o livro do topo da pilha
    retirarLivro(): string | undefined {
        if (!this.estaVazia()) {
            const livro = this.pilha.pop();
            console.log(`Livro '${livro}' retirado da pilha.`);
            return livro;
        } else {
            console.log("Pilha de livros está vazia.");
            return undefined;
        }
    }

    // Verifica se a pilha está vazia
    estaVazia(): boolean {
        return this.pilha.length === 0;
    }

    // Retorna o número de livros na pilha
    tamanho(): number {
        return this.pilha.length;
    }
}

// Criando uma instância da classe PilhaDeLivros
let pilhaDeLivros = new PilhaDeLivros();

// Lista de livros a serem adicionados
const livrosParaAdicionar = ["LIVRO01", "LIVRO02", "LIVRO03", "LIVRO04"];

// Loop para adicionar os livros à pilha
console.log("Adicionando livros a pilha:");
for (const livro of livrosParaAdicionar) {
    pilhaDeLivros.adicionarLivro(livro);
}

// Verificando o tamanho da pilha após as adições
console.log(`Número de livros na pilha após adicionar: ${pilhaDeLivros.tamanho()}`);

// Loop para retirar livros da pilha até que ela esteja vazia
console.log("Retirando livros da pilha:");
for (let i = pilhaDeLivros.tamanho(); i > 0; i--) {
    pilhaDeLivros.retirarLivro();
}

// Verificando se a pilha está vazia após todas as retiradas
console.log(`A pilha está vazia após as retiradas? ${pilhaDeLivros.estaVazia()}`);
