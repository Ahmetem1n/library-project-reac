import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Header, Image, Table } from "semantic-ui-react";
import StudentService from "../services/StudentService";

export default function StudentList() {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    let studentService = new StudentService();
    studentService.getStudents().then((result) => setStudents(result.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Öğrenci Id</Table.HeaderCell>
            <Table.HeaderCell>Cinsiyet Resim</Table.HeaderCell>
            <Table.HeaderCell>Cinsiyet</Table.HeaderCell>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>Soyadı</Table.HeaderCell>
            <Table.HeaderCell>Tc Kimlik No</Table.HeaderCell>
            <Table.HeaderCell>Doğum Yılı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {students?.map((student) => (
            <Table.Row key={student.studentId}>
              <Table.Cell>
                <Link to={`/student/${student.studentId}`}>
                  {student?.studentId}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Header as="h4" image>
                  <Image src={student?.genderUrl} rounded size="massive" />
                </Header>
              </Table.Cell>
              <Table.Cell>{student?.gender}</Table.Cell>
              <Table.Cell>{student?.studentFirstname}</Table.Cell>
              <Table.Cell>{student?.studentLastname}</Table.Cell>
              <Table.Cell>{student?.nationalityId}</Table.Cell>
              <Table.Cell>{student?.birthYear}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to="student_add" color="brown">
        Öğrenci Ekle
      </Button>
    </div>
  );
}
