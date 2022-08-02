import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";

type Props = {
  label?: string;
  name: string;
  placeholder: string;
  type?: string;
};

export default function MyTextInput({ label, ...props }: Props) {
  const [field, meta] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label color="red" basic>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}
