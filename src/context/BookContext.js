import React, {  createContext , useReducer, useEffect} from 'react'
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(BookReducer, [], () => {
        const localData = localStorage.getItem('knjige');
        return localData ? JSON.parse(localData) : [];
    })
    useEffect(() => {
        localStorage.setItem('knjige', JSON.stringify(books))
    }, [books])
    // const addBook = (title, author) => {
    //     setBooks([...books, {title, author, id: uuid()}])
    // }
    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id))
    // }
    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;

