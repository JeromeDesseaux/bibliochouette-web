import { Button } from '@mui/material';
import './App.css';
import Menu from './components/navigation/sidenav';
import { logout } from './services/auth';

const handleLogout = () => {
    logout();
};

const App = () => {
    return (
        <Menu title="Bibliochouette">
            <p>Hello world!</p>
            <Button onClick={() => handleLogout()}>Test</Button>
        </Menu>
    );
};

export default App;
