import { v4 as uuidv4 } from 'uuid';

export const bookReducer = (state, action) => {
    switch(action.type){
        case 'ADD BOOK':
            console.log([...state, {title: action.book.title, author: action.book.author, id: uuidv4()}])
            return [...state, {title: action.book.title, author: action.book.author, id: uuidv4()}]
        
        case 'DELETE BOOK':
            return  state.filter((book) => {
                return book.id !== action.id
            })
        default:
            return state
    }
}