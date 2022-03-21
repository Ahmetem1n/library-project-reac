import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import * as yup from "yup";
import BookService from "../services/BookService";
import LibraryProjectTextInput from "../utilities/customFormControllers/LibraryProjectTextInput";

export default function BookAdd() {
  const [bookName, setBookName] = useState(null);
  const [bookAuthor, setBookAuthor] = useState(null);
  const [barcode, setBarcode] = useState(null);
  const [bookSummary, setBookSummary] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [pageNumber, setPageNumber] = useState(null);
  const [publicationYear, setPublicationYear] = useState(null);
  const [publisherName, setPublisherName] = useState(null);
  const [stockQuantity, setStockQuantity] = useState(null);
  let bookService= new BookService();

  const initialValues = {
    bookName: "",
    bookAuthor: "",
    barcode: "",
    bookSummary: "",
    categoryId: "",
    imageUrl: "",
    pageNumber: "",
    publicationYear: "",
    publisherName: "",
    stockQuantity: "",
  };
  const schema = yup.object({
    bookName: yup.string().required("Kitap adı zorunlu"),
    bookAuthor: yup.string().required("Yazar adı zorunlu"),
    barcode: yup
      .number()
      .required("Barkod zorunlu ve sayı formatında olmalıdır."),
    bookSummary: yup.string().required("Kitap özeti zorunlu"),
    categoryId: yup
      .number()
      .required("Kategori id alanı zorunlu ve sayı formatında"),
    imageUrl: yup.string().required("Resim link zorunlu"),
    pageNumber: yup.number().required("Sayfa sayısı zorunlu"),
    publicationYear: yup.number().required("Basım yılı zorunlu"),
    publisherName: yup.string().required("Yayın evi bilgisi zorunlu"),
    stockQuantity: yup.number().required("Stok bilgisi zorunlu"),
  });

  return (
    <div>
      KİTAP EKLEME
      <Formik initialValues={initialValues} validationSchema={schema}>
        <Form className="ui form">
          <LibraryProjectTextInput
            name="bookName"
            placeholder="Kitap Adı"
            value={bookName ?? ""}
            onChange={(e) => setBookName(e.target.value)}
          />

          <LibraryProjectTextInput
            name="bookAuthor"
            placeholder="Yazar Adı"
            value={bookAuthor ?? ""}
            onChange={(e) => setBookAuthor(e.target.value)}
          />
          <LibraryProjectTextInput
            name="barcode"
            placeholder="Barkod"
            value={barcode ?? ""}
            onChange={(e) => setBarcode(e.target.value)}
          />
          <LibraryProjectTextInput
            name="bookSummary"
            placeholder="Kitap Özeti"
            value={bookSummary ?? ""}
            onChange={(e) => setBookSummary(e.target.value)}
          />
          <LibraryProjectTextInput
            name="categoryId"
            placeholder="Kategori id"
            value={categoryId ?? ""}
            onChange={(e) => setCategoryId(e.target.value)}
          />
          <LibraryProjectTextInput
            name="imageUrl"
            placeholder="Resim Link"
            value={imageUrl ?? ""}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <LibraryProjectTextInput
            name="pageNumber"
            placeholder="Sayfa Sayısı"
            value={pageNumber ?? ""}
            onChange={(e) => setPageNumber(e.target.value)}
          />
          <LibraryProjectTextInput
            name="publicationYear"
            placeholder="Basım Yılı"
            value={publicationYear ?? ""}
            onChange={(e) => setPublicationYear(e.target.value)}
          />
          <LibraryProjectTextInput
            name="publisherName"
            placeholder="Yayın Evi"
            value={publisherName ?? ""}
            onChange={(e) => setPublisherName(e.target.value)}
          />
          <LibraryProjectTextInput
            name="stockQuantity"
            placeholder="Stok Sayısı"
            value={stockQuantity ?? ""}
            onChange={(e) => setStockQuantity(e.target.value)}
          />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() =>
              bookService.addBook({
                bookName,
                bookAuthor,
                barcode,
                bookSummary,
                categoryId,
                imageUrl,
                pageNumber,
                publicationYear,
                publisherName,
                stockQuantity,
              })
            }
            disabled={
              !(bookName&&
              bookAuthor&&
              barcode&&
              bookSummary&&
              categoryId&&
              imageUrl&&
              pageNumber&&
              publicationYear&&
              publisherName&&
              stockQuantity)
            }
          >
            Kitap Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
