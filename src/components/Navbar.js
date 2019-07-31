import React, { useContext }  from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext)
    return (
        <div className="navbar">
            <h1>List Of Books</h1>
            <p>Currently You Have { books.length } books</p>
        </div>
    );
}
 
export default Navbar