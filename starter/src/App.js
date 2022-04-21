import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import { useState } from "react";
import { getAll,} from "./BooksAPI";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  //this state books is passed down to the children!
  const [books, setBooks] = useState([]);
  const [refreshBooks, setRefreshBooks] = useState(true)

  const bookStateChangeHandler=()=>{
    setRefreshBooks(true)
  }
  

  useEffect(() => {
    if(refreshBooks){
    const syncData = async () => {
      try {
        const data = await getAll();
        if (data) {
          setBooks(data);
          setRefreshBooks(false)
        }
      } catch (e) {
        console.log("error in getting actual books", e);
      }
    };

    syncData();
  }
  }, [refreshBooks]);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home books={books} listen={bookStateChangeHandler}/>} />
        <Route path="/search" element={<Search books={books} listen={bookStateChangeHandler}/>} />
      </Routes>
    </div>
  );
}

export default App;
