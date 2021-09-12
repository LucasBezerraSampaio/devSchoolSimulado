import { HeaderRight } from "./style";



export default function Header() {

    

    return (
        <HeaderRight>
            <div class="user-information-group">
                   <div className=""> <img src="/assets/images/oie.png" alt=""/>  <div class="divDentroIMG">3</div></div>
                    <div>Olá, <span>Lucas Bezerra Sampaio lindo maravilhoso ❤️❤️😍😍</span></div>
                </div>
                <div class="header-buttons">
                <button> <img src="/assets/svgs/Vector.svg" alt=""/> </button>
                    <button> <img src="/assets/svgs/Group 104.svg" alt="" /> </button>
                </div>
        </HeaderRight>
    )
}

