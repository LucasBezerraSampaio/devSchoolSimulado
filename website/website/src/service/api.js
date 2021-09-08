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
}
