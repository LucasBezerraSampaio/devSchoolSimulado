import { LeftBar } from "./styled"

export default function BarraEsquerda() {
    return (
        <LeftBar>
            <header class="header-left-box">
                <div class="svg-cabecalho-left-box"> <img src="/assets/svgs/Group107.svg" alt="" /></div>
                <div class="devSchool"> <span>Dev</span> School</div>
            </header>
            <div class="black-box"></div>
            <div class="left-box-management">
                <div> Gerenciamento </div>
                <img src="/assets/svgs/SetaBaixo.svg" alt=""/>
            </div>
            <div class="left-box-aluno">
                <div> Alunos </div>
            </div>
            
        </LeftBar>
        
    )
}