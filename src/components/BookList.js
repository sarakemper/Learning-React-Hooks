import React, { useContext} from 'react';
import { BookContext } from '../contexts/BookContexts';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
    console.log(useContext(BookContext), "This is my books context")
    const {numBooks, decreaseBooks} = useContext(ThemeContext)
    const {books, dispatch} = useContext(BookContext)


    const removeBook = (e, id) => {
        console.log("in book")
        e.preventDefault();
        dispatch({type: 'DELETE BOOK', id: id})
        decreaseBooks()
    }

    return (numBooks !== 0) ?  (  
        <div className = "">
            <ul>
                {books.map((book) => {
                    return(
                        <li onClick = {(e) => {removeBook(e, book.id)}} key = {book.id}> <div className = "title">{book.title}</div> <div className = "author">{book.author}</div></li>
                    )
                })}
            </ul>
        </div>
    ) : <p className = "addBook">Add a book!</p>
}
 
export default BookList;