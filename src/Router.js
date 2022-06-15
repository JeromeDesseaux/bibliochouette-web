import { Route, Routes } from 'react-router-dom';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import { AuthContext, ProtectedRoute } from './components/auth/AuthProvider';
import LibraryList from './pages/library/LibraryList';
import PupilsList from './pages/pupil/PupilsList';
import ClassesList from './pages/class/ClassesList';
import BookDetails from './pages/library/BookDetails';
import { useContext, useEffect } from 'react';
import { ClassContext } from './contexts/ClassContext';
import { LoanContext } from './contexts/LoanContext';
import { PupilContext } from './contexts/PupilContext';
import LoansList from './pages/loan/LoansList';

function Router() {
    const authContext = useContext(AuthContext);
    const pupilsContext = useContext(PupilContext);
    const loanContext = useContext(LoanContext);
    const classContext = useContext(ClassContext);

    useEffect(() => {
        const fetchAll = async () => {
            await pupilsContext.getPupils(authContext.user.uid);
            await loanContext.getLoans(authContext.user.uid);
            await classContext.getClasses(authContext.user.uid);
        };
        fetchAll();
    }, [pupilsContext, loanContext, classContext, authContext]);

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
                    path="/loans"
                    element={
                        <ProtectedRoute>
                            <LoansList />
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
