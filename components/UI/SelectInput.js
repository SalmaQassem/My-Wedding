import { MenuItem, InputLabel, Select } from "@mui/material";
import { useField, useFormikContext } from "formik";

const SelectInput = ({ name, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const config = {
    ...field,
    ...props,
    onChange: handleChange,
    type: props.type,
  };
  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }
  return (
    <>
      <InputLabel>{props.labeltext}</InputLabel>
      <Select {...config}>
        {props.data.map((item) => (
          <MenuItem key={item.name} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default SelectInput;
