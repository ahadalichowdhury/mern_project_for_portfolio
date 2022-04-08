import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import AddBook from "./components/AddBook";
import BookDeTail from "./components/book/BookDeTail";
import Books from "./components/book/Books";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/add" element={<AddBook />} exact></Route>
          <Route path="/books" element={<Books />} exact></Route>
          <Route path="/about" element={<About />} exact></Route>
          <Route path="/books/:id" element={<BookDeTail />} exact></Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
