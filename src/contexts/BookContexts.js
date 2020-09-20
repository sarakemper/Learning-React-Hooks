import React, {createContext, useReducer, useEffect} from 'react';
import { bookReducer } from '../reducers/bookreducer';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [], () => {
         const localData = localStorage.getItem('books');
         return localData ? JSON.parse(localData): []; 
    })
    //the third parameter is a function that allows the books to be not empty.  The function returns a value that is going to be the default value at the start (ignore the empty array)

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]) //function runs everytime books changes
    
    return ( 
        <BookContext.Provider value = {{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;

/* When you have functions and you pass it into the value property as a context you have to get the functions individually
in the child componenets.  However, you can avoid this by using reducers. */