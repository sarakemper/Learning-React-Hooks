import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BooksLeft = () => {
    const {numBooks} = useContext(ThemeContext)
        if (numBooks > 0)
            return <p>Currently you have {numBooks} to get through</p>
        else
            return <p>No more books to read.  Please work bitch.</p>
}
 
export default BooksLeft;