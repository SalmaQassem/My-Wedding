import { TextField, InputLabel } from "@mui/material";
import { useField } from "formik";

const DateTimePicker = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  const config = {
    ...field,
    ...props,
    type: props.type,
  };
  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }
  return (
    <>
      <InputLabel htmlFor={props.id}>{props.labeltext}</InputLabel>
      <TextField {...config} />
    </>
  );
};

export default DateTimePicker;
