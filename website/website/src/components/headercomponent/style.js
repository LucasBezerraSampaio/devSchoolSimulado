import styled from 'styled-components'


const HeaderRight = styled.div`
    display: flex;
    flex-direction: row;

    padding: 1em 2.4em;
    
  

    justify-content: space-between;

    .user-information-group {
    display: flex;
    flex-direction: row;

    align-items: center;

    font-family: 'Roboto';

    color: #615858;
    font-size: 1em;
    font-weight: 500;

   
  
    }

    .user-information-group img {
        border-radius: 50%;
        width: 57px;
        height: 57px;
    }

    .user-information-group div {
        margin-left: 1em;
    }

    .user-information-group span {
        font-weight: 700;
    }

    .header-buttons {
        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: center;
    }

    .header-buttons button {
        border: none;
        background: #986CDF;
        cursor: pointer;

       
       
        padding: .6em;
        border-radius: 50%;

        margin: 0px 0.3em;
    }

    .bottom-bar-right-header {
        border: 1px solid #D9D9D9;
        align-self: center;

        width: 95%;
    }

    .divDentroIMG {
        display: flex;
        flex-direction: column;
        position: absolute;
        border: 3px solid white;
        background-color: #E911C6;
        color: white;

        width: 20px;
        height: 20px;

        border-radius: 50%;

        justify-content: center;
        text-align: center;

        font-size: 10px;
        font-weight: bolder;


        left: 43em;
        top: 1.2em;
    }

`

export { HeaderRight };
