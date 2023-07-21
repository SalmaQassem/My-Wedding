import classes from "../../styles/LandingPage/_bookingForm.module.scss";
import { Formik, Form } from "formik";
import StyledContainer from "../UI/StyledContainer";
import MainButton from "../UI/MainButton";
import DateTimePicker from "../UI/DateTimePicker";
import SelectInput from "../UI/SelectInput";
import dayjs from "dayjs";

const data = [
  { id: "1", name: "cairo" },
  { id: "2", name: "giza" },
  { id: "3", name: "alex" },
];
const BookingForm = (props) => {
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
    console.log(values.occasionDate.format("MM/DD/YYYY"));
    alert(JSON.stringify(values, null, 2));
    //resetForm();
  };

  return (
    <div className={classes.booking}>
      <StyledContainer>
        <div className={classes.formContainer}>
          <Formik
            initialValues={{
              occasionDate: dayjs(),
              governorates: "",
              city: "",
            }}
            //validate={validateHandler}
            onSubmit={submitHandler}
          >
            {({ values }) => (
              <Form className={classes.form}>
                <div className={classes.input}>
                  <DateTimePicker
                    className={classes.field}
                    id="occasionDate"
                    name="occasionDate"
                    inputFormat="DD/MMM/YYYY"
                    value={values.occasionDate}
                    labeltext="occasion date:"
                  />
                </div>
                <div className={classes.input}>
                  <SelectInput
                    className={classes.field}
                    id="governorates"
                    name="governorates"
                    labeltext="governorates:"
                    data={data}
                    type=""
                  />
                </div>
                <div className={classes.input}>
                  <SelectInput
                    className={classes.field}
                    id="city"
                    name="city"
                    labeltext="city:"
                    data={data}
                    type=""
                  />
                </div>
                <div className={classes.input}>
                  <MainButton type="submit" className={classes.submit}>
                    search
                  </MainButton>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </StyledContainer>
    </div>
  );
};

export default BookingForm;
