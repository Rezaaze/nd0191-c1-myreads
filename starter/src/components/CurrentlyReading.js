import Book from "./Book";

const CurrentlyReading = ({actualBooks, listen}) => {
  
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
            {
              actualBooks.filter(book=> book.shelf === "currentlyReading").map(book=><Book key={book.id} ins={book} listen ={listen}></Book>)  
            }
            
        </ol>
      </div>
    </div>
  );
};


export default CurrentlyReading;