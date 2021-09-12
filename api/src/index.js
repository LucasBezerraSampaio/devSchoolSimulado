
import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());


app.get('/matricula', async (req, resp) => {
    try {
        let consultarInformacoes = await db.tb_matricula.findAll();
        resp.send(consultarInformacoes);

    } catch (erro) {
        resp.send( {mensagem: {erro} });
    }
});

app.post('/matricula', async (req, resp) => {
    try {
        let requerimento = req.body;
        let condicao = await db.tb_matricula.findOne(
            { where: {nm_turma},include: [[id_matricula]] }
        )
        
        if (!condicao) 
            resp.send({erro: 'Não pode ter dois alunos com o mesmo número'})
    

        let cadastroALuno = await db.tb_matricula.create({

            nm_aluno: requerimento.nome,
            nr_chamada: requerimento.numero,
            nm_curso: requerimento.curso,
            nm_turma: requerimento.turma

        })
        resp.send({status: "Post da matricula realizado com sucesso!"})
    } catch (error) {
        resp.send(toString(error))
    }
});

app.delete('/matricula', async (req, resp) => {
    try {
        let id = req.query.idMatricula;
        let deletar = await db.tb_matricula.destroy({ where: { id_matricula: id } } );
        resp.sendStatus(200);
    } catch (error) {
        resp.send(error.toString())
    }
});



app.put('/matricula', async (req, resp) => {
    try {
        let requerimento = req.body;
        let id = req.query.idMatricula;
        let cadastroALuno = await db.tb_matricula.update({

            nm_aluno: requerimento.nome,
            nr_chamada: requerimento.chamada,
            nm_curso: requerimento.curso,
            nm_turma: requerimento.turma
        },
        {
            where: { id_matricula: id }
        })
        
        resp.sendStatus(200)
    } catch (error) {
        resp.send(toString(error))
    }
});



app.listen(process.env.PORT,
    x => console.log(`Servidou rodou caminhão virou!" ${process.env.PORT}`))