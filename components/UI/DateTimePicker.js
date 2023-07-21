import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { InputLabel } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useField, useFormikContext } from "formik";

const DateTimePicker = ({ name, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (value) => {
    setFieldValue(name, value);
  };

  const config = {
    ...field,
    ...props,
    onChange: handleChange,
  };
  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <InputLabel>{props.labeltext}</InputLabel>
      <DatePicker {...config} {...props} />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
