import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { LoanContext } from '../../contexts/LoanContext';

const LoansContainer = styled.div({
    display: 'flex',
    flexDirection: 'column'
});

const LoansList = () => {
    const loansContext = useContext(LoanContext);

    return (
        <LoansContainer>
            {loansContext.loans.map((l) => (
                <Typography xs={{ marginTop: '500px' }}>{JSON.stringify(l)}</Typography>
            ))}
        </LoansContainer>
    );
};

export default LoansList;
