import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";
import { Link } from "react-router-dom";

const BookShelf = ({ books, listen }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReading
            listen={listen}
            actualBooks={books}
          ></CurrentlyReading>

          <WantToRead listen={listen} actualBooks={books}></WantToRead>

          <Read listen={listen} actualBooks={books}></Read>
        </div>
      </div>
      <div className="open-search">
        <Link to={"/search"}>Add a book</Link>
      </div>
    </div>
  );
};

export default BookShelf;
