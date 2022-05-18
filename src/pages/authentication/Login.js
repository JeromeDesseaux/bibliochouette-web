import React from 'react';
import { TextField, Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { AuthContext } from '../../components/auth/AuthProvider';

const CenteredDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

const VerticalForm = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 40%;
    gap: 2rem;
`;

function Login() {
    const auth = React.useContext(AuthContext);

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [hasError, setError] = React.useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.onLogin(username, password);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <CenteredDiv>
            <VerticalForm onSubmit={onSubmit}>
                <TextField
                    variant="outlined"
                    placeholder="caroline.dupond@ac-paris.fr"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    type="password"
                    placeholder="mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {hasError ? (
                    <Typography variant="caption" color="error">
                        Email ou mot de passe invalide.
                    </Typography>
                ) : (
                    ''
                )}
                <Button variant="contained" type="submit">
                    Se connecter
                </Button>
            </VerticalForm>
        </CenteredDiv>
    );
}

export default Login;
