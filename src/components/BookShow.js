import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({book, onEdit, onDelete}){
    const [showEdit, setShowEdit]= useState(false);

    const handleDelete=()=>{
        onDelete(book.id);
    }

    const handleEdit=()=>{
        setShowEdit(!showEdit);
    }

    const handleSubmit=(id, newTitle)=>{
        setShowEdit(false);
        onEdit(id, newTitle);
    }

    let content=<h3>{book.title}</h3>;
    if(showEdit){
        content=<BookEdit book={book} onSubmit={handleSubmit}/>;
    }
    
    
    
    return(
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/200`} />
            <div>{content}
            
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button></div>
        </div>
    )

}

export default BookShow;