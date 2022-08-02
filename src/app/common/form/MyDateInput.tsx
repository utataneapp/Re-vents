import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import { Button, FormField, Label, Select } from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  label?: string;
  name: string;
  placeholderText: string;
  timeFormat: string;
  showTimeSelect: boolean;
  timeCaption: string;
  dateFormat: string;
};

export default function MyDateInput({ label, ...props }: Props) {
  const { setFieldValue } = useFormikContext();
  const [field, meta, helpers] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.value}>
      <label>{label}</label>
      <DatePicker
        {...field}
        {...props}
        selected={
          new Date(field.value).getTime() ? new Date(field.value) : null
        }
        onChange={(value) => setFieldValue(field.name, value)}
      />
    </FormField>
  );
}
