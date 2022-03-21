import axios from "axios";
import { Component } from "react";

export default class TakingBookService extends Component {
  takeBook(initialValues) {
    return axios.post(
      "http://localhost:8080/takingBook/take?bookId=" +
        initialValues.bookId +
        "&studentId=" +
        initialValues.studentId
    );
  }

  giveBook(initialValues) {
    return axios.post(
      "http://localhost:8080/takingBook/give?bookId=" +
        initialValues.bookId +
        "&studentId=" +
        initialValues.studentId
    );
  }

  takeListGetAll() {
    return axios.get("http://localhost:8080/takingBook/getAll");
  }

  lateList() {
    return axios.get("http://localhost:8080/takingBook/lateGetAll");
  }

  getByTakingBookId(takingBookId) {
    return axios.get(
      "http://localhost:8080/takingBook/getByTakingBookId?id=" + takingBookId
    );
  }
}
