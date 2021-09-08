


import BarraLateral from '../../components/left-barcomponent';
import Cabecalho from '../../components/headercomponent'
import Inputs from '../../components/inputcomponent'
import { Home } from './styled';

export default function HomePage() {
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
                                Nome: <Inputs />
                            </div>
                            <div class="input-item">
                                Chamada: <Inputs /> 
                            </div>
                       </div>

                       <div class="sub-input-group"> 
                            <div class="input-item">
                                Curso: <Inputs /> 
                            </div>
                            <div class="input-item">
                                Turma: <Inputs /> 
                            </div>
                       </div>
                       
                       <button>Cadastrar</button>
                            
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