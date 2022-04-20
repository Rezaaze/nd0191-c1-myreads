import { useState } from "react";
import Book from "./Book";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Search = (props) => {
  const [sta, setSta] = useState([]);

  const getbooks = (books) => {
    setSta(books);
  };
  
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={"/"} className="close-search">
          Close
        </Link>
        <SearchBar onGetBooks={getbooks}></SearchBar>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {sta.length > 0 ? (
            sta.map((book) => (
              <Book
                key={book.id}
                ins={book}
                listen={props.listen}
                listBooks={props.books}
              ></Book>
            ))
          ) : (
            <div>empty</div>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Search;
