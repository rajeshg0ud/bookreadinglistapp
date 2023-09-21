import BookShow from './BookShow';

function BookList({books, onEdit, onDelete}){
    const list= books.map((book)=>{
        return <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete}/>
        
    })

    return( <div><h1>Reading List</h1><div className="book-list">{list}</div></div>)
}

export default BookList;