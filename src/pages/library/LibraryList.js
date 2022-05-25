import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import { CircularProgress, Fab } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../components/auth/AuthProvider';
import BookCard from '../../components/library/BookCard';
import { BookContext } from '../../contexts/BookContext';

const fabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
};

const CardsList = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center'
}));

const LibraryList = () => {
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(true);
    const authContext = useContext(AuthContext);
    const bookContext = useContext(BookContext);

    useEffect(() => {
        const fetchBooks = async () => {
            console.log('hello 1');
            const books = await bookContext.getAllBooks(authContext.user.uid);
            console.log('hello 2', books);
            setBooks(books);
            setLoading(false);
        };
        fetchBooks();
    }, [bookContext, authContext]);

    return (
        <div>
            {loading ? (
                <CircularProgress />
            ) : (
                <CardsList>
                    {books.map((book) => (
                        <BookCard key={book.uid} book={book} />
                    ))}
                    <Fab color="error" aria-label="add" style={fabStyle}>
                        <AddIcon />
                    </Fab>
                </CardsList>
            )}
        </div>
    );
};

export default LibraryList;
