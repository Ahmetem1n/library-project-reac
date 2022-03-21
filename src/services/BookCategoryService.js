import axios from "axios";
import { Component } from "react";

export default class BookCategoryService extends Component {
  addBookCategories(initialValues) {
    return axios.post(
      "http://localhost:8080/categories/add?categoryName=" +
        initialValues.categoryName +
        "&logoUrl=" +
        initialValues.logoUrl
    );
  }

  getBookCategories() {
    return axios.get("http://localhost:8080/categories/getAll");
  }
  getByCategoryId(categoryId) {
    return axios.get(
      "http://localhost:8080/categories/getByCategoryId?categoryId=" +
        categoryId
    );
  }
}
