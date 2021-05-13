import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Layout} from 'antd';
//componentes
import MenuTop from '../components/Admin/MenuTop/index.js';

import './LayoutAdmin.scss';

export default function LayoutAdmin({route}) {
    
    const { Header, Content, Footer } = Layout;
    
    return (
        <Layout>
            <h1>Layout Admin</h1>
            <Layout className="layout-admin">
            <Header className="layout-admin__header">
                <MenuTop/>
            </Header>
            <Content className="layout-admin__content">
                <LoadRoutes route={route} />
            </Content>
            <Footer className="layout-admin__footer">Footer</Footer>
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