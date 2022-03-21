import axios from "axios";
import { Component } from "react";

export default class BookService extends Component {
  addBook(initialValues) {
    return axios.post(
      "http://localhost:8080/book/add?barcode=" +
        initialValues.barcode +
        "&bookAuthor=" +
        initialValues.bookAuthor +
        "&bookName=" +
        initialValues.bookName +
        "&bookSummary=" +
        initialValues.bookSummary +
        "&categoryId=" +
        initialValues.categoryId +
        "&imageUrl=" +
        initialValues.imageUrl +
        "&pageNumber=" +
        initialValues.pageNumber +
        "&publicationYear=" +
        initialValues.publicationYear +
        "&publisherName=" +
        initialValues.publisherName +
        "&stockQuantity=" +
        initialValues.stockQuantity
    );
  }

  getBooks() {
    return axios.get("http://localhost:8080/book/getAll");
  }

  getByBookId(bookId) {
    return axios.get("http://localhost:8080/book/getByBookId?bookId=" + bookId);
  }
}
