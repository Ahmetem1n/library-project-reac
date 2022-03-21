import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card } from "semantic-ui-react";
import TakingBookService from "../services/TakingBookService";

export default function TakeDetail() {
  let { takingBookId } = useParams();

  const [takingBook, setTakingBook] = useState({});
  useEffect(() => {
    let takingBookService = new TakingBookService();
    takingBookService
      .getByTakingBookId(takingBookId)
      .then((result) => setTakingBook(result.data));
  }, []);

  return (
    <div>
      <Card>
        <Card.Header>İşlem Id: {takingBook.takingBookId}</Card.Header>
        <Card.Header>Kitap Adı : {takingBook.book?.bookName}</Card.Header>
        <Card.Header>Öğrenci Adı: {takingBook.student?.studentFirstname}</Card.Header>
        <Card.Header>Kitap Alınma Tarihi: {takingBook.takeDate}</Card.Header>
        <Card.Header>Kitap Verilme Tarihi: {takingBook.returnDate}</Card.Header>
      </Card>
    </div>
  );
}
