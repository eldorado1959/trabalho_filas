
import * as readlineSync from 'readline-sync';

function mostrarMenu(): void {
    const fila = new FilaDeTarefas();
    let opcao: number;

    do {
        console.log("\n=== Menu To-Do List ===");
        console.log("1. Adicionar Tarefa");
        console.log("2. Remover Tarefa");
        console.log("3. Listar Tarefas");
        console.log("4. Marcar Tarefa como Concluída");
        console.log("5. Sair");

        opcao = readlineSync.questionInt("Escolha uma opção: ");

        switch (opcao) {
            case 1:
                const descricao = readlineSync.question("Digite a descrição da tarefa: ");
                const prioridade = readlineSync.questionInt("Digite a prioridade (opcional, 0 para pular): ");
                const tarefa = new Tarefa(descricao, prioridade > 0 ? prioridade : undefined);
                fila.adicionarTarefa(tarefa);
                break;
            case 2:
                fila.removerTarefa();
                break;
            case 3:
                fila.listarTarefas();
                break;
            case 4:
                fila.tarefaPronta();
                break;
            case 5:
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida!");
        }
    } while (opcao !== 5);
}

mostrarMenu();




