import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { ClassContext } from '../../contexts/ClassContext';

const ClassesContainer = styled.div({
    display: 'flex',
    flexDirection: 'column'
});

const ClassesList = () => {
    const classesContext = useContext(ClassContext);

    return (
        <ClassesContainer>
            {classesContext.classes.map((c) => (
                <Typography xs={{ marginTop: '500px' }}>{JSON.stringify(c)}</Typography>
            ))}
        </ClassesContainer>
    );
};

export default ClassesList;
