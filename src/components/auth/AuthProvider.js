import React from 'react';
import { isLoggedIn, login, logout } from '../../services/auth';
import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
    const [token, setToken] = React.useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        const token = await login();
        setToken(token);
        navigate('/');
    };

    const handleLogout = () => {
        logout();
        setToken(null);
        navigate('/login');
    };

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.any
};

const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn()) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.any
};

export { AuthContext, AuthProvider, ProtectedRoute };
