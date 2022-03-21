import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Header, Image, Table } from "semantic-ui-react";
import BookCategoryService from "../services/BookCategoryService";

export default function BookCategoryList() {
  const [bookCategories, setBookCategories] = useState(null);
  useEffect(() => {
    let bookCategoryService = new BookCategoryService();
    bookCategoryService
      .getBookCategories()
      .then((result) => setBookCategories(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Kategori Id</Table.HeaderCell>
            <Table.HeaderCell>Kategori Resmi</Table.HeaderCell>
            <Table.HeaderCell>Kategori Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {bookCategories?.map((bookCategory) => (
            <Table.Row
              key={bookCategory.categoryId}
              onClick={() => console.log("123")}
            >
              <Table.Cell>
                <Link to={`/book_category/${bookCategory.categoryId}`}>
                  {bookCategory?.categoryId}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Header as="h4" image>
                  <Image src={bookCategory?.logoUrl} rounded size="massive" />
                </Header>
              </Table.Cell>
              <Table.Cell>{bookCategory?.categoryName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to="book_category_add" color="brown">
        Kategori Ekle
      </Button>
    </div>
  );
}
