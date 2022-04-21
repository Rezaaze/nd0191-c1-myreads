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
        
        

        const response = await search(word);
        if(response) {
          onGetBooks(response);
        } else {
          onGetBooks([])
          throw Error;
        }
      } catch (e) {
        console.log("error in search", e);
      }finally{
        
      }
    };
    
    doIt();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
