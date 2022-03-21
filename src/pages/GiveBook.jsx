import { Formik } from 'formik';
import React, { useState } from 'react';
import { Button, Checkbox, Form, FormField } from 'semantic-ui-react';
import * as yup from "yup";
import TakingBookService from '../services/TakingBookService';
import LibraryProjectTextInput from '../utilities/customFormControllers/LibraryProjectTextInput';

export default function GiveBook() {
  let takingBookService= new TakingBookService();
  const[bookId,setBookId]=useState(null)
  const[studentId,setStudentId]=useState(null)
  const initialValues = {
    bookId: "",
    studentId: "",
  };
  const schema = yup.object({
    bookId: yup.number().required("Kitap id zorunlu"),
    studentId: yup.number().required("Öğrenci id zorunlu"),
  });
  return (
    <div>
      KİTAP TESLİM ETME
      <Formik initialValues={initialValues} validationSchema={schema}>
        <Form className="ui form">
          <LibraryProjectTextInput
            name="bookId"
            placeholder="Kitap id"
            value={bookId ?? ""}
            onChange={(e) => setBookId(e.target.value)}
          />
          <LibraryProjectTextInput
            name="studentId"
            placeholder="Öğrenci id"
            value={studentId ?? ""}
            onChange={(e) => setStudentId(e.target.value)}
          />

          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button color="green" type="submit" onClick={() =>
              takingBookService.giveBook({
                bookId,
                studentId,
              })
            }
            disabled={
              !(
                bookId &&
                studentId
              )
            }>
            Kitap Teslim Et
          </Button>
        </Form>
      </Formik>
        </div>
    )
}
