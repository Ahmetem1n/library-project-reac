import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Checkbox, FormField } from "semantic-ui-react";
import * as yup from "yup";
import { addStudent } from "../services/StudentService";
import LibraryProjectTextInput from "../utilities/customFormControllers/LibraryProjectTextInput";

export default function StudentAdd() {
  const [studentFirstname, setStudentFirstname] = useState(null);
  const [studentLastname, setStudentLastname] = useState(null);
  const [birthYear, setBirthYear] = useState(null);
  const [gender, setGender] = useState(null);
  const [nationalityId, setNationalityId] = useState(null);

  const initialValues = {
    studentFirstname: "",
    studentLastname: "",
    birthYear: "",
    gender: "",
    nationalityId: "",
  };
  const schema = yup.object({
    studentFirstname: yup.string().required("Öğrenci adı zorunlu"),
    studentLastname: yup.string().required("Öğrenci soyadı zorunlu"),
    birthYear: yup
      .number()
      .required("Doğum tarihi zorunlu ve sayı formatında olmalıdır."),
    gender: yup.string().required("Cinsiyet zorunlu"),
    nationalityId: yup.number().required("Tc Alanı zorunlu ve sayı formatında"),
  });

  return (
    <div>
      ÖĞRENCİ EKLEME
      <Formik initialValues={initialValues} validationSchema={schema}>
        <Form className="ui form">
          <LibraryProjectTextInput
            name="studentFirstname"
            placeholder="Öğrenci Adı"
            value={studentFirstname ?? ""}
            onChange={(e) => setStudentFirstname(e.target.value)}
          />
          <LibraryProjectTextInput
            name="studentLastname"
            placeholder="Öğrenci Soyadı"
            value={studentLastname ?? ""}
            onChange={(e) => setStudentLastname(e.target.value)}
          />
          <LibraryProjectTextInput
            name="birthYear"
            placeholder="Doğum Yılı"
            value={birthYear ?? ""}
            onChange={(e) => setBirthYear(e.target.value)}
          />
          <LibraryProjectTextInput
            name="gender"
            placeholder="Cinsiyet"
            value={gender ?? ""}
            onChange={(e) => setGender(e.target.value)}
          />
          <LibraryProjectTextInput
            name="nationalityId"
            placeholder="Tc Kimlik No"
            value={nationalityId ?? ""}
            onChange={(e) => setNationalityId(e.target.value)}
          />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() =>
              addStudent({
                studentFirstname,
                studentLastname,
                birthYear,
                gender,
                nationalityId,
              })
            }
            disabled={
              !(
                studentFirstname &&
                studentLastname &&
                birthYear &&
                gender &&
                nationalityId
              )
            }
          >
            Öğrenci Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
