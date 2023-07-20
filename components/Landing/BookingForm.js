import classes from "../../styles/LandingPage/_bookingForm.module.scss";
import { Formik, Form, Field } from "formik";
import MainButton from "../UI/MainButton";
import DateTimePicker from "../UI/DateTimePicker";
import SelectInput from "../UI/SelectInput";

const governorates = ["cairo", "Alex"];

const BookingForm = () => {
  const validateHandler = (values) => {
    const errors = {};
    if (!values.occasionDate) {
      errors.occasionDate = "Required";
    }

    if (!values.governorates) {
      errors.governorates = "Required";
    }

    if (!values.city) {
      errors.city = "Required";
    }

    return errors;
  };

  const submitHandler = async (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    //resetForm();
  };

  return (
    <div className={classes.formContainer}>
      <Formik
        initialValues={{
          occasionDate: "",
          governorates: "",
          city: "",
        }}
        //validate={validateHandler}
        onSubmit={submitHandler}
      >
        <Form className={classes.form}>
          <div className={classes.input}>
            <DateTimePicker
              className={classes.field}
              id="occasionDate"
              name="occasionDate"
              labeltext="occasion date:"
              type="date"
            />
          </div>
          <div className={classes.input}>
            <SelectInput
              className={classes.field}
              id="governorates"
              name="governorates"
              labeltext="governorates:"
              data={governorates}
              type=""
            />
          </div>
          <div className={classes.input}>
            <SelectInput
              className={classes.field}
              id="city"
              name="city"
              labeltext="city:"
              data={governorates}
              type=""
            />
          </div>
          <MainButton type="submit">search</MainButton>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
