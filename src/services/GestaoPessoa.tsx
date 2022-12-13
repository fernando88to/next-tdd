import {pessoaClient} from "../clients/PessoaClient";
import {Pessoa} from "../types/Pessoa";

export const gestaoPessoa = {
    pesquisarOrdemIdCrescente: async (): Promise<Pessoa[]> => {
        let pessoasList = await pessoaClient.pesquisarTodos();
        let pessoasOrdenadas = pessoasList.sort((a, b) => {
            return a.nome.localeCompare(b.nome);
        });
        return pessoasOrdenadas;
    }

}