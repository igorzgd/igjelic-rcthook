import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState ('');
    const [author, setAuthor] = useState ('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {
            title, author
        }});
        setTitle('');
        setAuthor('');
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <input type='text' value={title} placeholder='Enter title' onChange={(e) => setTitle(e.target.value)} required/>
            <input type='text' value={author} placeholder='Enter author' onChange={(e) => setAuthor(e.target.value)} required/>
            <input type="submit" value='Add Book' />
        </form>
    );
}
 
export default NewBookForm;