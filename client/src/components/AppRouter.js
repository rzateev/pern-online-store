import React, {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../Utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    //const isAuth = false
    console.log(user)
    return (
        <Router>
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
        </Router>
    );
};

export default AppRouter;