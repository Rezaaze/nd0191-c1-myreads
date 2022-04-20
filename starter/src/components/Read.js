import Book from "./Book";

const Read = ({actualBooks, listen}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {actualBooks.filter(book=> book.shelf === "read").map((book) => (
            <Book key={book.id} ins={book} listen={listen}></Book>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Read;
