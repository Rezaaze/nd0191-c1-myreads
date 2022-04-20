
import Book from "./Book";
const BookShelf = ({actualBooks, listen, shelfName}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {actualBooks.map((book) => (
              <Book key={book.id} ins={book} listen={listen}></Book>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;