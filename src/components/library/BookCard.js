import styled from '@emotion/styled';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CenteredImage = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1 0 auto',
    height: '300px'
});

const BookInformationsContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
    justifyContent: 'space-between',
    alignItems: 'space-between'
});

const BookCard = (props) => {
    return (
        <Card sx={{ display: 'flex', height: '400px', width: '300px' }}>
            <Link
                to={`/book/${props.book.uid}`}
                style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        flex: '1 0 auto'
                    }}>
                    <CenteredImage>
                        <CardMedia
                            component="img"
                            height="300px"
                            image={props.book.cover}
                            alt="Book cover"
                            sx={{ width: '100%', height: '100%' }}
                        />
                    </CenteredImage>
                    <CardContent
                        sx={{
                            flex: '1 0 auto',
                            flexDirection: 'column',
                            paddingTop: '10px',
                            paddingBottom: '10px'
                        }}>
                        <BookInformationsContainer>
                            <Typography>{props.book.title}</Typography>
                            <Typography variant="caption">{props.book.authors}</Typography>
                        </BookInformationsContainer>
                    </CardContent>
                </Box>
            </Link>
        </Card>
    );
};

BookCard.propTypes = {
    book: PropTypes.any
};

export default BookCard;
