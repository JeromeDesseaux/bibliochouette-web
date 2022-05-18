import React from 'react';
import { Button } from '@mui/material';
import './App.css';
import { AuthContext } from './components/auth/AuthProvider';
import Menu from './components/navigation/sidenav';

const App = () => {
    const auth = React.useContext(AuthContext);
    return (
        <Menu title="Bibliochouette">
            <p>Hello world!</p>
            <Button onClick={() => auth.onLogout()}>Test</Button>
        </Menu>
    );
};

export default App;
