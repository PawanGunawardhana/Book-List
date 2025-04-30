import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([
        { title: 'Madol Duwa', author: 'Martin Wickramasinghe', id: 1 },
        { title: 'Hathpana', author: 'Kumarathunga Munidasa', id: 2 }
    ]);

    const addBook = (title, author) => {
        setBooks([...books], {title:title, author:author, id: uuidv4()})
    }

    const removeBook = (id) => {
        setBooks(books.filter((book) => { return book.id !== id } ))
    }

    return (
        <BookContext.Provider>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;