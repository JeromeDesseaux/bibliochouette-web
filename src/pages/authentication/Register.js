import { TextField, Button } from '@mui/material';

function Register() {
    return (
        <form>
            <TextField variant="outlined" />
            <TextField variant="outlined" type="password" />
            <Button variant="contained">{"S'enregistrer"}</Button>
        </form>
    );
}

export default Register;
