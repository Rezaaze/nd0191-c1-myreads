import { useState } from "react";
import { useEffect } from "react";
import { search } from "../BooksAPI";

const SearchBar = ({ onGetBooks }) => {
  const [word, setWord] = useState("");

  const handleSearch = (event) => {
    setWord(event.target.value);
  };
  useEffect(() => {
    const doIt = async () => {
      try {
        if (word === "") {
          onGetBooks([]);
        }

        const response = await search(word);
        if (response) {
          onGetBooks(response);
        } else {
          throw Error;
        }
      } catch (e) {
        console.log("error in search", e);
      }
    };

    doIt();
  }, [word]);

  return (
    <div className="search-books-input-wrapper">
      <input
        value={word}
        onChange={handleSearch}
        type="text"
        placeholder="Search by title, author, or ISBN"
      />
    </div>
  );
};

export default SearchBar;
