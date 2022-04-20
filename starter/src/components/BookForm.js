import React from "react";
import { useEffect } from "react";
import { update } from "../BooksAPI";

const BookForm = ({ listen, book, isInShelf }) => {
  const [bookState, setBookState] = React.useState(() => {
    if (book.shelf === undefined) {
      return "none";
    }
    return book.shelf;
  });
  const [bookStateChange, setBookStateChange] = React.useState(false);

  const bookStateHandler = (event) => {
    console.log(event.target.value);
    setBookState(event.target.value);
    setBookStateChange(true);
  };
  useEffect(() => {
    if (bookStateChange) {
      const change = async () => {
        try {
          await update(book, bookState);
          listen();
        } catch (e) {
          console.log("error in changing shelf", e);
        }
      };
      change();
      setBookStateChange(false);
    }
  }, [bookStateChange]);

  return (
    <div
      className="book-shelf-changer"
      style={
        isInShelf ? { backgroundColor: "red" } : { backgroundColor: "green" }
      }
    >
      <select onChange={bookStateHandler} value={bookState}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookForm;
