import { useField } from "formik";
import { categoryData } from "../../api/categoryOptions";
import { FormField, Label, Select } from "semantic-ui-react";

type Props = {
  label?: string;
  name: string;
  placeholder: string;
  type?: string;
};
export default function MySelectInput({ label, ...props }: Props) {
  const [field, meta, helpers] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.value} control={"a"}>
      <label>{label}</label>
      <Select
        options={categoryData}
        clearable={true}
        value={field.value || null}
        onChange={(e, d) => helpers.setValue(d.value)}
        onBlur={() => helpers.setTouched(true)}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}
