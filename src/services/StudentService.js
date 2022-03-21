import axios from "axios";
import { Component } from "react";

export default class StudentService extends Component {
  getStudents() {
    return axios.get("http://localhost:8080/students/getAll");
  }
  getByStudentId(studentId) {
    return axios.get(
      "http://localhost:8080/students/getByStudentId?studentId=" + studentId
    );
  }
}

export function addStudent(initialValues) {
  return axios.post(
    "http://localhost:8080/students/add?birthYear=" +
      initialValues.birthYear +
      "&gender=" +
      initialValues.gender +
      "&nationalityId=" +
      initialValues.nationalityId +
      "&studentFirstname=" +
      initialValues.studentFirstname +
      "&studentLastname=" +
      initialValues.studentLastname
  );
}
