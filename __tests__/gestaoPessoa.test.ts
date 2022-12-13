import '@testing-library/jest-dom'
import {gestaoPessoa} from "../src/services/GestaoPessoa";
import {Pessoa} from "../src/types/Pessoa";
import {pessoaClient} from "../src/clients/PessoaClient";
describe('Gestao Pessoas Unit', () => {
    it('deve ordernar os nome em ordem alfabetica', async () => {
        pessoaClient.pesquisarTodos = jest.fn().mockImplementation(() => {
            let pessoas: Pessoa[] = [];
            pessoas.push({id: 2, email: 'fernando88to2@gmail.com', nome: 'fernando c'});
            pessoas.push({id: 4, email: 'fernando88to4@gmail.com', nome: 'fernando a'});
            pessoas.push({id: 4, email: 'fernando88to4@gmail.com', nome: 'fernando b'});
            return pessoas;
        });
        let pessoasRetorno = await gestaoPessoa.pesquisarOrdemIdCrescente();
        expect(pessoasRetorno[0].nome).toBe('fernando a');
        expect(pessoasRetorno[1].nome).toBe('fernando b');
        expect(pessoasRetorno[2].nome).toBe('fernando c');
    });
})