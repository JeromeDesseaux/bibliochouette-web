import { Route, Routes } from 'react-router-dom';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import { ProtectedRoute } from './components/auth/AuthProvider';
import LibraryList from './pages/library/LibraryList';
import PupilsList from './pages/pupil/PupilsList';
import ClassesList from './pages/class/ClassesList';
import BookDetails from './pages/library/BookDetails';

function Router() {
    return (
        <Routes>
            <Route path="/">
                <Route
                    index
                    element={
                        <ProtectedRoute>
                            <LibraryList />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/pupils"
                    element={
                        <ProtectedRoute>
                            <PupilsList />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/classes"
                    element={
                        <ProtectedRoute>
                            <ClassesList />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/book/:id"
                    element={
                        <ProtectedRoute>
                            <BookDetails />
                        </ProtectedRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    );
}

export default Router;
