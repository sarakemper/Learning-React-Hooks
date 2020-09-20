import React, {useContext, useState} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContexts';

const AddBook = () => {
    const {increasenumBooks} = useContext(ThemeContext)
    const {dispatch} = useContext(BookContext)

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD BOOK', book: {
            title, author
        }})
        increasenumBooks()
        
    }
    return ( 
        <form onSubmit = {handleSubmit}>
            <input onChange = {handleTitleChange}type = "text" placeholder = "book title" required></input>
            <br></br>
            <input onChange = {handleAuthorChange} type = "text" placeholder = "author" required></input>
            <br></br>
            <button>add book</button>
        </form>
     );
}
 
export default AddBook;