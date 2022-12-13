import {Pessoa} from "../types/Pessoa";

export const pessoaClient = {
    pesquisarTodos: async (): Promise<Pessoa[]> => {
        await new Promise(r => setTimeout(r, 4800));
        let pessoas: Pessoa[] = [];
        pessoas.push({id: 4, email: 'fernando88to4@gmail.com', nome: 'fernando4'});
        pessoas.push({id: 2, email: 'fernando88to2@gmail.com', nome: 'fernando2'});
        pessoas.push({id: 3, email: 'fernando88to3@gmail.com', nome: 'fernando3'});
        pessoas.push({id: 1, email: 'fernando88to1@gmail.com', nome: 'fernando1'});
        return pessoas
    }
}