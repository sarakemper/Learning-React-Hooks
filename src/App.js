import React from 'react';
import BookList from './components/BookList';
import BookContextProvider from './contexts/BookContexts';
import ThemeContextProvider from './contexts/ThemeContext';
import ReadingTitle from './components/ReadingTitle';
import AddBook from './components/addBook';

function App() {
  return (
    <div className = "App">
      <ThemeContextProvider>
        <ReadingTitle />
        <BookContextProvider>
          <BookList />
          <AddBook />
        </BookContextProvider>
      </ThemeContextProvider>

    </div>
  );
}

export default App;
