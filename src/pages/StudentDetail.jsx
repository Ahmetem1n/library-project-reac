import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, Image } from "semantic-ui-react";
import StudentService from "../services/StudentService";

export default function StudentDetail() {
  let { studentId } = useParams();

  const [student, setStudent] = useState({});
  useEffect(() => {
    let studentService = new StudentService();
    studentService
      .getByStudentId(studentId)
      .then((result) => setStudent(result.data));
  }, []);
  return (
    <div>
      <Card>
        <Image src={student.genderUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Öğrenci Id: {student.studentId}</Card.Header>
          <Card.Header>Öğrenci Cinsiyeti: {student.gender}</Card.Header>
          <Card.Header>Öğrenci Adı: {student.studentFirstname}</Card.Header>
          <Card.Header>Öğrenci Soyadı: {student.studentLastname}</Card.Header>
          <Card.Header>
            Öğrenci Tc Kimlik No: {student.nationalityId}
          </Card.Header>
          <Card.Header>Doğum yılı: {student.birthYear}</Card.Header>
          <Card.Header>Geç kalma sayısı: {student.lateQuantity}</Card.Header>
          <Card.Header>
            Elindeki kitap sayısı: {student.numberOfBooks}
          </Card.Header>
        </Card.Content>
      </Card>
    </div>
  );
}
