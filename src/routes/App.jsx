import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout.jsx';
import Login from '../containers/Login.jsx';
import RecoveryPassword from "../containers/RecoveryPassword.jsx";
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component= {Home}/>
                    <Route exact path="/login" component= {Login} />
                    <Route exact path="recovery-password" component= {RecoveryPassword} />
                    <Route component={NotFound}/>
                </Layout>
            </Switch>
        </BrowserRouter>
        
    );
}

export default App;