import { Route, Switch, BrowserRouter} from 'react-router-dom';



import Home from './pages/home'

export default function Roteamento() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home}></Route>
            </Switch>
        </BrowserRouter>
    )
}