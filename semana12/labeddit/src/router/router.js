import {BrowserRouter, Switch, Route} from "react-router-dom"
import FeedPage from "../screens/feedPage"
import LoginPage from '../screens/loginPage'
import RegisterPage from '../screens/registerPage'
import PostPage from '../screens/postPage'

const Router = () => {

    return (
        <BrowserRouter>
        <Switch>
            <Route exact path={['/login', '/']}>
                <LoginPage />
            </Route>

            <Route exact path={'/register'}>
                <RegisterPage />
            </Route>

            <Route exact path={'/feed'}>
                <FeedPage />
            </Route>

            <Route exact path={'/post/:id'}>
                <PostPage />
            </Route>

            <Route>
                <div>
                    Página não Encontrada.
                </div>
            </Route>
            
        </Switch>
        </BrowserRouter>
    )

}

export default Router