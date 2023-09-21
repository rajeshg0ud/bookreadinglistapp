import './App.css';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import {useState} from 'react';

function App() {
  const [books, setBooks] = useState([]);

  const createBook=(title)=>{
    const updatedBooks= [...books, {id:Math.round(Math.random()*99999), title:title}];
    setBooks(updatedBooks);
  };

  const editBookById=(id, newTitle)=>{
    const updatedBooks=books.map((book)=>{
      if(id===book.id){
        return {...book, title:newTitle}
      }

      return book;
    })
    setBooks(updatedBooks);
  }

  const deleteBookById=(id)=>{
    const updatedBooks=books.filter((book)=>{
      return book.id !==id;
    })
    setBooks(updatedBooks);
  }

   return(
    <div className="App" >
      <BookCreate onCreate={createBook}/>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
    </div>
  );
}

export default App;
