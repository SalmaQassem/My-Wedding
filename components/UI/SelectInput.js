import classes from "../../styles/_input.module.scss";
import styles from "../../styles/_selectInput.module.scss";
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
      <Select {...config} className={`${classes.field} ${styles.box}`}>
        {props.data.length === 0 && (
          <MenuItem value="">{props.default}</MenuItem>
        )}
        {props.data.length > 0 &&
          props.data.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
      </Select>
    </>
  );
};

export default SelectInput;
