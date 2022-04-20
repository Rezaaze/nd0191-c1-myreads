import BookForm from "./BookForm";

const Book = ({listen, ins ,listBooks}) => {
  
  
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={ins.imageLinks !== undefined ?{
              width: 128,
              height: 193,
              backgroundImage: `url(${ins.imageLinks.thumbnail})`,
                
            }:{width: 128,
              height: 193,}}
          ></div>
          <BookForm book={ins} listBooks={listBooks} listen={listen} ></BookForm>
        </div>
        <div className="book-title">{ins.title}</div>
        <div className="book-authors">{ins.authors}</div>
      </div>
    </li>
  );
};

export default Book;


