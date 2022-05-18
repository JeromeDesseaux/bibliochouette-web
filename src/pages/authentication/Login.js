import { TextField, Button } from '@mui/material';
import styled from '@emotion/styled';
import { login } from '../../services/auth';

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

const onLogin = () => {
    login();
};

function Login() {
    return (
        <CenteredDiv>
            <VerticalForm>
                <TextField variant="outlined" placeholder="caroline.dupond@ac-paris.fr" />
                <TextField variant="outlined" type="password" placeholder="mot de passe" />
                <Button variant="contained" onClick={onLogin}>
                    Se connecter
                </Button>
            </VerticalForm>
        </CenteredDiv>
    );
}

export default Login;
