import * as readlineSync from 'readline-sync';

export class FilaDeParque {
    private pessoas: string[] = []

    public entrarNaFila(nome: string): void {
        this.pessoas.unshift(nome);
        console.log(`${nome} entrou na fila.`);
    }

    public atender(): string | undefined {
        if (this.estaVazia()) {
            console.log("fila esta vazia!");
            return undefined;
        }
        const atendido = this.pessoas.pop();
        console.log(`${atendido} foi atendido(a).`);
        return atendido;
    }

    public proximaNaFila(): string | undefined {
        if (this.estaVazia()) {
            console.log("fila esta vazia!");
            return undefined;
        }
        console.log(`Proxima pessoa na fila: ${this.pessoas[this.pessoas.length - 1]}`);
        return this.pessoas[this.pessoas.length - 1];
    }

    public estaVazia(): boolean {
        return this.pessoas.length === 0;
    }

    public tamanho(): number {
        console.log(`Tamanho da fila: ${this.pessoas.length}`);
        return this.pessoas.length;
    }
}

// Função para exibir o menu e lidar com as opções do usuário
function mostrarMenu(): void {
    const fila = new FilaDeParque();
    let opcao: number;

    do {
        console.log("\n=== Menu Fila de Parque ===");
        console.log("01. Entrar na fila");
        console.log("02. Atender pessoa");
        console.log("03. Ver próxima na fila");
        console.log("04. Verificar se a fila está vazia");
        console.log("05. Ver tamanho da fila");
        console.log("99. Sair");

        let opcao = readlineSync.question("Escolha uma opcao: ");

        switch (opcao) {
            case '01':
                const nome = readlineSync.question("Digite o nome da pessoa: ");
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
                } else {
                    console.log("A fila não está vazia.");
                }
                break;
            case '05':
                fila.tamanho();
                break;
            case '99':
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
        }
    } while (opcao !== 99);
}

mostrarMenu();
