import { Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import { ProtectedRoute } from './components/auth/AuthProvider';

function Router() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <App />
                    </ProtectedRoute>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default Router;
