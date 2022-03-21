import { useField } from "formik";
import React from "react";
import { FormField } from "semantic-ui-react";

export default function LibraryProjectTextInput({ ...props }) {
  //console.log(props.value)
  const [field] = useField(props);
  return (
    <FormField>
      <input {...field} {...props} />
    </FormField>
  );
}
