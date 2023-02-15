import React from "react";
import Layout from '../containers/Layout.jsx';
import Login from '../containers/Login.jsx';
import '../styles/global.css';

const App = () => {
    return (
        <Layout>
            <Login />
        </Layout>
    );
}

export default App;