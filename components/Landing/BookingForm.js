import classes from "../../styles/LandingPage/_bookingForm.module.scss";
import { Formik, Form } from "formik";
import StyledContainer from "../UI/StyledContainer";
import MainButton from "../UI/MainButton";
import DateTimePicker from "../UI/DateTimePicker";
import SelectInput from "../UI/SelectInput";
import dayjs from "dayjs";
import { useState, useEffect } from "react";

const BookingForm = (props) => {
  const [gov, setGov] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

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
    //console.log(values.occasionDate.format("MM/DD/YYYY"));
    //alert(JSON.stringify(values, null, 2));
    //resetForm();
  };
  useEffect(() => {
    if (gov !== "") {
      const id = props.gov.find((item) => item.name === gov).gov_id;
      const cities = props.cities.filter((item) => item.gov_id === id);
      setFilteredCities(cities);
    }
  }, [gov]);

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
            innerRef={(formikActions) =>
              formikActions
                ? setGov(formikActions.values.governorates)
                : setGov("")
            }
            //validate={validateHandler}
            onSubmit={submitHandler}
          >
            {({ values }) => (
              <Form className={classes.form}>
                <div className={classes.input}>
                  <DateTimePicker
                    id="occasionDate"
                    name="occasionDate"
                    inputFormat="DD/MMM/YYYY"
                    value={values.occasionDate}
                    labeltext="occasion date:"
                  />
                </div>
                <div className={classes.input}>
                  <SelectInput
                    id="governorates"
                    name="governorates"
                    labeltext="governorates:"
                    data={props.gov}
                    type=""
                  />
                </div>
                <div className={classes.input}>
                  <SelectInput
                    id="city"
                    name="city"
                    default="choose city"
                    labeltext="city:"
                    data={filteredCities}
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
