import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newBook.title && newBook.author) {
      setBooks([...books, newBook]);
      setNewBook({ title: "", author: "" }); // Reset fields after submission
    }
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Enter book title"
            value={newBook.title}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Enter author's name"
            value={newBook.author}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
