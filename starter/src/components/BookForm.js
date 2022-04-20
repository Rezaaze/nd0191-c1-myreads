import React from "react";
import { useEffect } from "react";
import { update } from "../BooksAPI";

const BookForm = ({listBooks, listen, book,}) => {
  const isInShelf = listBooks? listBooks.find(u=>u.id===book.id):false;
  const [bookState, setBookState] = React.useState(() => {
    if (isInShelf) {
      const a = listBooks.filter(item=>item.id===book.id)
      console.log(a)
      return a[0].shelf;
    }
    if(book.shelf){
      return book.shelf
    }
    return "none";
    
    
  });
  console.log(bookState)
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookStateChange]);

  return (
    <div
      className="book-shelf-changer"
      style={
        isInShelf ? { backgroundColor: "red" } : { backgroundColor: "green" }
      }
    >
      <select onChange={bookStateHandler} value={bookState}>
        <option value="moveTo" disabled>
          Move to...
        </option>
        <option value="currentlyReading" >Currently Reading</option>
        <option value="wantToRead"  >Want to Read</option>
        <option value="read" >Read</option>
        <option value="none" >None</option>
      </select>
    </div>
  );
};

export default BookForm;
