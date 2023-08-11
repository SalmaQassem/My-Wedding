import classes from "../../styles/LandingPage/_bookingForm.module.scss";
import { Formik, Form } from "formik";
import StyledContainer from "../UI/StyledContainer";
import MainButton from "../UI/MainButton";
import DateTimePicker from "../UI/DateTimePicker";
import SelectInput from "../UI/SelectInput";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const BookingForm = (props) => {
  const [gov, setGov] = useState("");
  const [filteredData, setFilteredData] = useState({ govId: "", cities: [] });
  const router = useRouter();

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
    //resetForm();
    router.push("/Halls/" + `${values.governorates}` + "/" + `${values.city}`);

  };
  useEffect(() => {
    if (gov !== "") {
      const id = props.gov.find((item) => item.name === gov).gov_id;
      const filteredCities = props.cities.filter((item) => item.gov_id === id);
      setFilteredData({ govId: id, cities: filteredCities });
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
                    data={filteredData.cities}
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
