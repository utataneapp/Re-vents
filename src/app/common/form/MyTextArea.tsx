import { useField } from "formik";
import { Button, FormField, Label } from "semantic-ui-react";

type Props = {
  label?: string;
  name: string;
  placeholder: string;
  rows: number;
  type?: string;
};
export default function MyTextArea({ label, ...props }: Props) {
  const [field, meta] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.value}>
      <label>{label}</label>
      <textarea {...field} {...props}></textarea>
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}
