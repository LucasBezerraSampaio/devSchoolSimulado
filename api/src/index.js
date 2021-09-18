
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
        let r = await db.tb_matricula.findOne({ where: { nr_chamada: requerimento.numero, nm_turma: requerimento.turma } });

       

        if (requerimento.nome === '')
            return resp.send({ Status: `O campo do nome não pode ser nulo` });
        if (requerimento.numero < 0)
            return resp.send({ Status: `O campo do número não pode ser menor que 0` })
        if (requerimento.curso === '')
            return resp.send({ Status: `O campo do curso não pode ser nulo` });
        if (requerimento.turma === '')
            return resp.send({ Status: `O campo da turma não pode ser nulo` })
        if (requerimento.numero === '')
            return resp.send({Status: `O campo da chamada não pode ser nulo`})
        if (r != null)
            return resp.send({ Status: `Número já existente` });
       

        let cadastroALuno = await db.tb_matricula.create({

            nm_aluno: requerimento.nome,
            nr_chamada: requerimento.numero,
            nm_curso: requerimento.curso,
            nm_turma: requerimento.turma

        })
        resp.send(cadastroALuno)
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
       

        if (requerimento.nome === '')
            return resp.send({ Status: `O campo do nome não pode ser nulo` });
        if (requerimento.numero < 0)
            return resp.send({ Status: `O campo do número não pode ser menor que 0` })
        if (requerimento.curso === '')
            return resp.send({ Status: `O campo do curso não pode ser nulo` });
        if (requerimento.turma === '')
            return resp.send({ Status: `O campo da turma não pode ser nulo` })
        if (requerimento.chamada === '')
            return resp.send({Status: `O campo da chamada não pode ser nulo`})
        if (requerimento.chamada < 0)
            return resp.send({ Status: `Número da chamada não pode ser negativo` })
        
        
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