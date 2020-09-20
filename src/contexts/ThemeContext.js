import React, { useState, createContext, useEffect} from 'react';

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
    const [numBooks, setNumBooks] = useState(() => {
        console.log("in numBooks initializer")
        const localData = localStorage.getItem('numberOfBooks');
        return localData? Number(localData): 0;
    })

    useEffect(() => {
        console.log("in use effect")
        localStorage.setItem('numberOfBooks', numBooks)
    }, [numBooks]) 

    /*local storage stays in the browser even when you shut down chrome, reboot your browser, etc.
    Initially what happened is that every time we refreshed in useEffect we were setting the books again to the value in set State.
    As every time we refreshed use State was called and creating a new books array and completely erasing from the previous window. Now what we are doing
    is making useState the value that is in the local storage during refresh (this is called first). Then we are calling useEffect to UPDATE the local
    storage every time something happens (but does not matter in the intial render, only when we change data throughout.)*/

    const increasenumBooks = () => {
        setNumBooks(numBooks+1)
    }
    const decreaseBooks = () => {
        setNumBooks(numBooks-1)
    }

    return ( 
        <ThemeContext.Provider value ={{numBooks, increasenumBooks, decreaseBooks}}>
            {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;