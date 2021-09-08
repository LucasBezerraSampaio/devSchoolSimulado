import styled from 'styled-components'

const LeftBar = styled.div`
     
    display: flex;
    flex-direction: column;
    
    background-color: #2B3031;


    min-height: 100vh;
   


.header-left-box {
    display: flex;
    flex-direction: row;

    margin: 3em;
    align-items: center;
    justify-content: center;
    
}

.svg-cabecalho-left-box {
    border-right: 10px solid transparent;
}

.devSchool {
    color: white;
    font-size: 1.75em;
    font-family: 'Roboto';
    font-weight: 700;
    
}

.devSchool span {
    color: #EA10C7;
    font-family: 'Roboto';
    font-weight: 700;
}



.black-box {
    background-color: #262626;
    width: 21.6em;
    height: 3.8em;
}

.left-box-management {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    
    
    height: 70px;
}

.left-box-management img {
    cursor: pointer;
}

.left-box-management div {
    color: white;
    
    font-size: 1.12em;
    font-weight: 500;
    font-family: 'Roboto';


    margin-left: 1em;
}

.left-box-aluno {
    display: flex;
    flex-direction: row;

    height: 3.43em;

    background-color: white;
    border-left: 4px solid  #EA10C7;

    color: #1A1A1A;
    font-size: 1.2em;
    font-weight: 500;
    font-family: 'Roboto';

    align-items: center;

    padding-left: 4.3em;

}

`


export { LeftBar };