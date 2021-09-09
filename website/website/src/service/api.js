import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
});

export default class Api {

    async cadastrarAluno(nomeAluno, numeroChamada, curso, turma) {
        let cadastroJson = {
            nome: nomeAluno,
            numero: numeroChamada,
            curso: curso,
            turma: turma
        }

        let r = await api.post(`/matricula`, cadastroJson );
        return r.data
    }

    async listarCadastrados() {
        let listar = await api.get(`/matricula`);
        return listar.data;
    }

    async removerAluno(id) {
        let remover = await api.delete(`/matricula?idMatricula=${id}`);
        return remover.data;
    }

    async alterarInfo(id, nome, chamada, curso, turma) {
        let alterar = await api.put(`/matricula?idMatricula=${id}`, { nome, chamada, curso, turma });
        return alterar.data;
    }
}
