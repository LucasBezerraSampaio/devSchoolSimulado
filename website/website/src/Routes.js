import { Route, Switch, BrowserRouter} from 'react-router-dom';



import Home from './pages/home/homeIndex'
import Oie from './pages/paginaFutura';

export default function Roteamento() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home}></Route>
                <Route path="*" component={Oie}></Route>
            </Switch>
        </BrowserRouter>
    )
}