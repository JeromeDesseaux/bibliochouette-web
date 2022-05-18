import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebase/firebaseFunctions';
import { useLocalStorage } from '../../hooks/localStorage.hooks';

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', null);
    const navigate = useNavigate();

    const handleLogin = async (login, password) => {
        try {
            const user = await signInWithEmailAndPassword(auth, login, password);
            setUser(user);
            navigate('/');
        } catch (error) {
            throw new Error();
        }
    };

    const handleLogout = () => {
        setUser(null);
        navigate('/login');
    };

    const value = {
        user,
        onLogin: handleLogin,
        onLogout: handleLogout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.any
};

const ProtectedRoute = ({ children }) => {
    const authContext = React.useContext(AuthContext);

    console.log('Current logged in user', authContext.user);

    if (!authContext.user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.any
};

export { AuthContext, AuthProvider, ProtectedRoute };
