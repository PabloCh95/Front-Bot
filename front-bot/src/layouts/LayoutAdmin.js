import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {Layout} from 'antd';

export default function LayoutAdmin({route}) {
    
    const { Header, Content, Footer } = Layout;
    
    return (
        <Layout>
            <h1>Layout Admin</h1>
            <Layout>
            <Header>Header</Header>
            <Content>
                <LoadRoutes route={route} />
            </Content>
            <Footer>Footer</Footer>
            </Layout>
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