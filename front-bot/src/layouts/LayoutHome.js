import React from 'react'
import {Switch,Route} from 'react-router-dom';
import {Layout} from 'antd';

import './LayoutHome.scss';

export default function LayoutHome({route}) {

    const { Header,Content,Footer } = Layout;
    
    return (
        <Layout>
            <h1>Layout Home</h1>
            <Content>
                <LoadRoutes route={route} />
            </Content>
            <Footer>Pablo Emanuel Chorolque 2021</Footer>
        </Layout>
    )
}

function LoadRoutes({route}){

    return(
     <Switch>
        { 
            route.map( ( routes, index ) => (
                <Route 
                    key={index}
                    path={routes.path}
                    exact={routes.exact}
                    component={routes.component}
                />
            ))}
     </Switch>
    )
}