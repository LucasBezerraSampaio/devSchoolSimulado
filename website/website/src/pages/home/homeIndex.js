


import BarraLateral from '../../components/left-barcomponent';
import Cabecalho from '../../components/headercomponent'
import { ComponentInput } from '../../components/inputcomponent/styled';
import { Home } from './styled';
import { useState } from 'react';
import Api from '../../service/api';

const api = new Api();


export default function HomePage() {
    const [nomeAluno, setNomeAluno] = useState('');
    const [numeroChamada, setNumeroChamada] = useState('');
    const [curso, setCurso] = useState('');
    const [turma, setTurma] = useState('');

    const cadastrarAluno = async (nomeAluno, numeroChamada, curso, turma) => {
        
        let oi = await api.cadastrarAluno(nomeAluno, numeroChamada, curso, turma);
        alert("ALuno cadastrado com sucesso");
    }

    return (
        <Home>
            <BarraLateral />
            <div class="right-box">
                <Cabecalho />
                <div class="bottom-bar-right-header"></div>
                <div class="body-right-box">
                    <div class="box-new-student">
                        <div class="text-new-student">
                            <div class="student-bar"></div>
                            <div class="oie">Novo Aluno</div>
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
                       
                       <button onClick={cadastrarAluno}>Cadastrar</button>
                            
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
                                <th> Turma </th>
                                <th> Curso </th>
                                <th class="a"> </th>
                                <th class="a"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td> 1 </td>
                                <td> Fulao da Silva Sauro</td>
                                <td> 15 </td>
                                <td> InfoX </td>
                                <td > Informática </td>
                                <td> <button> <img src="/assets/svgs/editiButton.svg" alt="" /> </button> </td>
                                <td class = "aa">   <button> <img src="/assets/svgs/deleteButton.svg" alt="" /> </button> </td>
                            </tr>
                            <tr class="int">
                                <td> 1 </td>
                                <td> Fulao da Silva Sauro</td>
                                <td> 16 </td>
                                <td> InfoX </td>
                                <td > Informática </td>
                                <td class="td-button">   </td>
                                <td>   </td>
                            </tr>
                            <tr>
                                <td> 1 </td>
                                <td> Fulao da Silva Sauro</td>
                                <td> 17 </td>
                                <td> InfoX </td>
                                <td > Informática </td>
                                <td>   </td>
                                <td>   </td>
                            </tr>
                            <tr class="int">
                                <td> 1 </td>
                                <td> Fulao da Silva Sauro</td>
                                <td> 18 </td>
                                <td> InfoX </td>
                                <td > Informática </td>
                                <td>   </td>
                                <td>   </td>
                            </tr>
                                

                            <tr class="int">
                                <td> 1 </td>
                                <td> Fulao da Silva Sauro</td>
                                <td> 18 </td>
                                <td> InfoX </td>
                                <td > Informática </td>
                                <td>   </td>
                                <td>   </td>
                            </tr>

                            <tr class="int">
                                <td> 1 </td>
                                <td> Fulao da Silva Sauro</td>
                                <td> 18 </td>
                                <td> InfoX </td>
                                <td > Informática </td>
                                <td>   </td>
                                <td>   </td>
                            </tr>
                                

                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </Home>
            
    )
}