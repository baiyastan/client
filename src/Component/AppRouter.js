import React, { useContext } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { Context } from '../index';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../Utils/Consts';

const  AppRouter = () => {
    
    

        const {user, device} = useContext(Context)

        console.log(user, device)
        return (
            <Switch>
                {user.isAuth && authRoutes.map(({path, Component}) => 
                    <Route key={path} path={path} component={Component} exact />
                )}
                {publicRoutes.map(({path, Component}) => 
                    <Route key={path} path={path} component={Component} exact />
                )}
                <Redirect to={SHOP_ROUTE} />
            </Switch>
        )
    }


export default AppRouter
