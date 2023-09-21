import {useState} from "react";

function BookCreate({onCreate}) {
    const [title, setTitle]=useState('');

    const handleChange=(event)=>{
      setTitle(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return (
      <div >
        <form className="book-create" onSubmit={handleSubmit}>
        <h3>Add a Book</h3>
        <p>Title</p>

        <input type="text" onChange={handleChange} />
        <button>Create</button>
        </form>
      </div>    );
}

  export default BookCreate;