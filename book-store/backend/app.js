const express = require("express");
const mongoose = require("mongoose");
const router = require("./route/book-route");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", router);

const uri =
  "mongodb+srv://admin:admin@cluster0.nmuhs.mongodb.net/book-store?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    console.log("database are connected");
  })
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
