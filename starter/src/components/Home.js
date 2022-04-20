import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

const Home = ({ books, listen }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf actualBooks={books.filter(book => book.shelf === "currentlyReading")} listen={listen} shelfName="currentlyReading"></BookShelf>
          <BookShelf actualBooks={books.filter(book => book.shelf === "read")} listen={listen} shelfName="read"></BookShelf>
          <BookShelf actualBooks={books.filter(book => book.shelf === "wantToRead")} listen={listen} shelfName="wantToRead"></BookShelf>
          
        </div>
      </div>
      <div className="open-search">
        <Link to={"/search"}>Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
