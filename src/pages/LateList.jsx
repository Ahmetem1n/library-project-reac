import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Button, Table } from "semantic-ui-react";
import TakingBookService from "../services/TakingBookService";

export default function LateList() {
  const [takingBooks, setTakingBooks] = useState(null);

  useEffect(() => {
    let takingBookService = new TakingBookService();
    takingBookService.lateList().then((result) => setTakingBooks(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İşlem Id</Table.HeaderCell>
            <Table.HeaderCell>Öğrenci Adı</Table.HeaderCell>
            <Table.HeaderCell>Kitap Adı</Table.HeaderCell>
            <Table.HeaderCell>Alma Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Verme Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {takingBooks?.map((takingBook) => (
            <Table.Row key={takingBook.takingBookId}>
              <Table.Cell>
                <Link to={`/taking_book/${takingBook.takingBookId}`}>
                  {takingBook?.takingBookId}
                </Link> 
              </Table.Cell>
              <Table.Cell>
                <Link to={`/student/${takingBook.student.studentId}`}>
                  {takingBook?.student.studentFirstname}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/book/${takingBook.book.bookId}`}>
                  {takingBook?.book.bookName}
                </Link>
              </Table.Cell>
              <Table.Cell>{takingBook?.takeDate}</Table.Cell>
              <Table.Cell>{takingBook?.returnDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to="taking_book_take" color="brown">Kitap Al</Button>
      <Button as={NavLink} to="taking_book_give" color="brown">Kitap Ver</Button>
      <Button as={NavLink} to="taking_book_late_list" color="brown">Geç kalanları listele </Button>
    </div>
  );
}
