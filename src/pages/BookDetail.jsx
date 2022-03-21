import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, Image } from "semantic-ui-react";
import BookService from "../services/BookService";

export default function BookDetail() {
  let { bookId } = useParams();

  const [book, setBook] = useState({});
  useEffect(() => {
    let bookService = new BookService();
    bookService.getByBookId(bookId).then((result) => setBook(result.data));
  }, []);
  return (
    <div>
      <Card>
        <Image src={book.imageUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Kitap Id: {book.bookId}</Card.Header>
          <Card.Header>Kitap Adı: {book.bookName}</Card.Header>
          <Card.Header>Kitap Yazarı: {book.bookAuthor}</Card.Header>
          <Card.Header>Yayın evi: {book.publisherName}</Card.Header>
          <Card.Header>Yayın yılı: {book.publicationYear}</Card.Header>
          <Card.Header>Sayfa sayısı: {book.pageNumber}</Card.Header>
          <Card.Header>Stok adedi: {book.stockQuantity}</Card.Header>
          <Card.Header>Barkod No: {book.barcode}</Card.Header>
          <Card.Header>
            Kategori Adı: {book.bookCategory?.categoryName}
          </Card.Header>
          <Card.Header> Kitap Özeti: {book.bookSummary}</Card.Header>
        </Card.Content>
      </Card>
    </div>
  );
}
