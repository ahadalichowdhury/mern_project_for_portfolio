const Book = require("../model/book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ books });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "No Book found" });
  }
  return res.status(200).json({ book });
};

const addBook = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });

    book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(501).json({ message: "book can not add" });
  }
  return res.status(200).json({ book });
};

const updateData = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(501).json({ message: "book can not add" });
  }
  return res.status(200).json({ book });
};

const deleteData = async (req, res, next) => {
  const id = req.params.id;

  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "not found" });
  }
  return res.status(200).json({ book });
};

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateData = updateData;
exports.deleteData = deleteData;
