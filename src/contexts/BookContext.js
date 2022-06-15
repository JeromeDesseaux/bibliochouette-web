import React from 'react';
import { getDatabase, ref, get, child } from 'firebase/database';
import { flatten } from '../utils/generics';

const BookContext = React.createContext(null);

const BookProvider = ({ children }) => {
    const [books, setBooks] = React.useState([]);
    const database = getDatabase();

    const getBookByUID = (uid) => {
        return books.find((b) => b.uid === uid);
    };

    const addBook = (book) => {
        let newBooks = books.push(book);
        setBooks(newBooks);
        return books;
    };

    const getBooks = async (userId) => {
        const dbRef = ref(database, `books`);
        const snapshot = await get(child(dbRef, `/${userId}`));
        const dbBooks = flatten(snapshot.val());
        if (snapshot) setBooks(dbBooks);
        return dbBooks;
    };

    const value = {
        books,
        getBookByUID,
        addBook,
        getBooks
    };

    return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export { BookContext, BookProvider };
