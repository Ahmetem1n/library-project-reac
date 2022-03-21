import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Header, Image, Table } from "semantic-ui-react";
import BookService from "../services/BookService";

export default function BookList() {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    let bookService = new BookService();
    bookService.getBooks().then((result) => setBooks(result.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Kitap Id</Table.HeaderCell>
            <Table.HeaderCell>Resim</Table.HeaderCell>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>Yazarı</Table.HeaderCell>
            <Table.HeaderCell>Yayın Evi</Table.HeaderCell>
            <Table.HeaderCell>Yayın Yılı</Table.HeaderCell>
            <Table.HeaderCell>Sayfa Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Barkod</Table.HeaderCell>
            <Table.HeaderCell>Kategori Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {books?.map((book) => (
            <Table.Row key={book.bookId}>
              <Table.Cell>
                <Link to={`/book/${book.bookId}`}>{book?.bookId}</Link>
              </Table.Cell>
              <Table.Cell>
                <Header as="h4" image>
                  <Image src={book?.imageUrl} rounded size="massive" />
                </Header>
              </Table.Cell>
              <Table.Cell>{book?.bookName}</Table.Cell>
              <Table.Cell>{book?.bookAuthor}</Table.Cell>
              <Table.Cell>{book?.publisherName}</Table.Cell>
              <Table.Cell>{book?.publicationYear}</Table.Cell>
              <Table.Cell>{book?.pageNumber}</Table.Cell>
              <Table.Cell>{book?.barcode}</Table.Cell>
              <Table.Cell>
                <Link to={`/book_category/${book.bookCategory.categoryId}`}>
                  {book?.bookCategory?.categoryName}
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to="book_add" color="brown">
        Kitap Ekle
      </Button>
    </div>
  );
}
