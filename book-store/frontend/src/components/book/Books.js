import axios from "axios";
import React, { useEffect, useState } from "react";
import Book from "./Book";
import "./book.css";

const url = "https://api-store.ahadalichowdhury.com/books/";

const fetchHandler = async () => {
  return await axios.get(url).then((res) => res.data);
};

function Books() {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);

  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book className="book" book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Books;
