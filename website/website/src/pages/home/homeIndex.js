


import BarraLateral from '../../components/left-barcomponent';
import Cabecalho from '../../components/headercomponent'
import { ComponentInput } from '../../components/inputcomponent/styled';
import { Home } from './styled';
import { useEffect, useState, useRef } from 'react';
import Api from '../../service/api';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import LoadingBar from 'react-top-loading-bar'

const api = new Api();



export default function HomePage() {
    const [nomeAluno, setNomeAluno] = useState('');
    const [numeroChamada, setNumeroChamada] = useState('');
    const [curso, setCurso] = useState('');
    const [turma, setTurma] = useState('');
    const [alterando, setAlterando] = useState(0);
    const [todosAlunos, setTodosAlunos] = useState([]);
    const barraCarregamento = useRef(null);

    

    const carregarCadastrado = async () => {
        barraCarregamento.current.continuousStart();
        let i = await api.listarCadastrados();
        setTodosAlunos(i);
        
        barraCarregamento.current.complete();
    }

    const limparVariavel = () => {
        setAlterando(0);
        setCurso('');
        setNomeAluno('');
        setNumeroChamada('')
        setTurma('');
    }

    useEffect(() => {
        carregarCadastrado();
    }, [])

    const cadastrarAluno = async (info) => {
        

        if (alterando === 0) {
            let oi = await api.cadastrarAluno(nomeAluno, numeroChamada, curso, turma);
            console.log(oi);
            if (oi.Status)
                return toast.error(`${oi.Status}`)
            if (oi.error)
                return toast.error(`${oi.error}`)
            toast.success(`Aluno ${nomeAluno} cadastrado!`);
        } else {
           
            let r = await api.alterarInfo(alterando, nomeAluno, numeroChamada, curso, turma);
            console.log(r);
           
            if (r.Status)
                return toast.error(`${r.Status}`)
            if (r.error)
                return toast.error(`${r.error}`)
            toast.success(`Aluno ${nomeAluno} alterado com sucesso!`)
        }

        carregarCadastrado();

        limparVariavel(alterando, nomeAluno, numeroChamada, curso, turma)
    }
    
    const remover = async (info)  => {
       
        confirmAlert({
            title: 'Deletar Aluno',
            message: `Certeza que deseja deletar o aluno ${info.nm_aluno} ?`,
            buttons: [
                {
                    label: 'sim',
                    onClick: async () => {
                        let r = await api.removerAluno(info.id_matricula);
                        console.log(r);
                        toast.success(`Aluno ${info.nm_aluno} removido com sucesso!`)
                        carregarCadastrado();
                    }
                },
                {
                    label: 'não'
                }
            ]
        });
                   
       
         
    }

    const alterarAluno = async (info) => {
        setAlterando(info.id_matricula);
        setNomeAluno(info.nm_aluno);
        setNumeroChamada(info.nr_chamada);
        setCurso(info.nm_curso);
        setTurma(info.nm_turma);
    }

    return (
        <Home>
            <ToastContainer />
            <BarraLateral />
            <LoadingBar color="#986CDF" ref={ barraCarregamento } />
            <div class="right-box">
                <Cabecalho />
                <div class="bottom-bar-right-header"></div>
                <div class="body-right-box">
                    <div class="box-new-student">
                        <div class="text-new-student">
                            <div class="student-bar"></div>
                            <div class="oie">{alterando > 0 ? `Alterando ${nomeAluno}` : "Novo Aluno"}</div>
                        </div>
                        <div class="input-group">
                       <div class="sub-input-group">
                            <div class="input-item">
                                    Nome: <ComponentInput value={nomeAluno}  onChange={e => setNomeAluno(e.target.value)}/>
                            </div>
                            <div class="input-item">
                                Chamada: <ComponentInput value={numeroChamada} onChange={e => setNumeroChamada(e.target.value)} /> 
                            </div>
                       </div>

                       <div class="sub-input-group"> 
                            <div class="input-item">
                                Curso: <ComponentInput  value={curso} onChange={e => setCurso(e.target.value)}/> 
                            </div>
                            <div class="input-item">
                                Turma: <ComponentInput  value={turma} onChange={e => setTurma(e.target.value)}/> 
                            </div>
                       </div>
                       
                            <button onClick={cadastrarAluno}>{ alterando > 0 ?"Alterar" :"Cadastrar"}</button>
                            
                    </div>
                    </div>
                    <div class="matriculed-stutents">
                    <div class="text-matriculed-students">
                        <div class="bar-matriculed"></div>
                        <div class="text-matriculed">Alunos Matriculados</div>
                    </div>

                    <table class ="table-user">
                        <thead>
                            <tr>
                                <th > ID </th>
                                <th> Nome </th>
                                <th> Chamada </th>
                                <th> Curso </th>
                                <th> Turma </th>
                                <th  className="classebotao"> </th>
                                <th  className="classebotao"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {todosAlunos.map((info, linha) => 
                                <tr className={linha % 2 === 0 ?`linha1` :`linha2`}>
                                    <td> {info.id_matricula} </td>
                                    <td title={info.nm_aluno}> {info.nm_aluno != null && info.nm_aluno.length >= 25
                                                        ?info.nm_aluno.substr(0, 25) + "..."
                                                        :info.nm_aluno}
                                    </td>
                                    <td> {info.nr_chamada} </td>
                                    <td> {info.nm_curso} </td>
                                    <td> {info.nm_turma} </td>
                                    <td className="classebotao"> <button onClick={() => alterarAluno(info)} style={{cursor: 'pointer'}}> <img src="/assets/svgs/editiButton.svg" alt="" /> </button> </td>
                                    <td className="classebotao"> <button onClick={() => remover(info)} style={{cursor: 'pointer'}}> <img src="/assets/svgs/deleteButton.svg" alt="" /> </button> </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </Home>
            
    )
}