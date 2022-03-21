import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, Image } from "semantic-ui-react";
import BookCategoryService from "../services/BookCategoryService";

export default function BookCategoryDetail() {
  let { bookCategoryId } = useParams();

  const [bookCategory, setBookCategory] = useState({});
  useEffect(() => {
    let bookCategoryService = new BookCategoryService();
    bookCategoryService
      .getByCategoryId(bookCategoryId)
      .then((result) => setBookCategory(result.data));
  }, []);
  return (
    <div>
      <Card>
        <Image src={bookCategory.logoUrl} wrapped ui={false} />
        <Card.Header>Kategori Id: {bookCategory.categoryId}</Card.Header>
        <Card.Header>Kategori Adı: {bookCategory.categoryName}</Card.Header>
      </Card>
    </div>
  );
}
