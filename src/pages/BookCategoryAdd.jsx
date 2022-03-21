import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import * as yup from "yup";
import BookCategoryService from "../services/BookCategoryService";
import LibraryProjectTextInput from "../utilities/customFormControllers/LibraryProjectTextInput";

export default function BookCategoryAdd() {
  let bookCategoryService = new BookCategoryService();
  const [categoryName, setCategoryName] = useState(null);
  const [logoUrl, setLogoUrl] = useState(null);
  const initialValues = {
    categoryName: "",
    logoUrl: "",
  };
  const schema = yup.object({
    categoryName: yup.string().required("Kategori adı zorunlu"),
    logoUrl: yup.string().required("Resim linki zorunlu"),
  });
  return (
    <div>
      KATEGORİ EKLEME
      <Formik initialValues={initialValues} validationSchema={schema}>
        <Form className="ui form">
          <LibraryProjectTextInput
            name="categoryName"
            placeholder="Kategori Adı"
            value={categoryName ?? ""}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <LibraryProjectTextInput
            name="logoUrl"
            placeholder="Resim Linki"
            value={logoUrl ?? ""}
            onChange={(e) => setLogoUrl(e.target.value)}
          />

          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() =>
              bookCategoryService.addBookCategories({
                categoryName,
                logoUrl,
              })
            }
            disabled={!(categoryName && logoUrl)}
          >
            Kategori Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
