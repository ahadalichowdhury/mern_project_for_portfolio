const express = require("express");
const router = express.Router();
const booksController = require("../controllers/book-controller")

router.get("/", booksController.getAllBooks)
router.post("/", booksController.addBook)
router.get("/:id", booksController.getById)
router.put("/:id", booksController.updateData)
router.delete("/:id", booksController.deleteData)

module.exports = router;