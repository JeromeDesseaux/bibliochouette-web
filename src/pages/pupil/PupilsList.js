import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { PupilContext } from '../../contexts/PupilContext';

const PupilsContainer = styled.div({
    display: 'flex',
    flexDirection: 'column'
});

const PupilsList = () => {
    const pupilsContext = useContext(PupilContext);

    return (
        <PupilsContainer>
            {pupilsContext.pupils.map((p) => (
                <Typography xs={{ marginTop: '500px' }}>{p.username}</Typography>
            ))}
        </PupilsContainer>
    );
};

export default PupilsList;
