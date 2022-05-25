import { useContext } from 'react';
import { useParams } from 'react-router';
import { BookContext } from '../../contexts/BookContext';

const BookDetails = () => {
    const bookContext = useContext(BookContext);
    const { id } = useParams();
    const book = bookContext.getBookByUID(id);
    return <div>Hello Book {book.title} </div>;
};

export default BookDetails;
