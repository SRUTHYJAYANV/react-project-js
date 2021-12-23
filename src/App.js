import React, { useState } from "react";
import "./App.css";
import "./Fonts/stylesheet.css";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import InputComponent from "./Components/ReusableComponents/InputComponent";
import HomePageComponent from "./Components/HomePageComponent/HomePageComponent";
import ButtonComponent from "./Components/ReusableComponents/ButtonComponent";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import ErrorComponent from "./Components/ReusableComponents/ErrorComponent";
import SelectComponent from "./Components/ReusableComponents/SelectComponent";
import DatePickerComponent from "./Components/ReusableComponents/DatePickerComponent";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const initialValues = {
  selectOption: "",
  email: "",
  datePicker: null
};
const onSubmit = (values) => {
  alert(JSON.stringify(values));
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email Address").required("Email Required"),
  selectOption: Yup.string().required("Required"),
  datePicker: Yup.date().required("Required").nullable()
});

const App = () => {

  const [expandTripAccordion, setExpandTripAccordion] = useState(true);
  const [expandSpotAccordion, setExpandSpotAccordion] = useState(false);
  const [expandConfirmationAccordion, setExpandConfirmationAccordion] = useState(false);
  
  const selectOptions = [
      { name: "Select", value: '' },
      { name: "Option 1", value: 'option1' },
      { name: "Option 2", value: 'option2' },
      { name: "Option 3", value: 'option3' },
    ]
  return (
    <>
      <HeaderComponent />
      <HomePageComponent>
        <Accordion expanded={expandTripAccordion} onClick={()=>{setExpandTripAccordion(!expandTripAccordion);setExpandSpotAccordion(false);setExpandConfirmationAccordion(false)}}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>1 Find your trip</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                <Form className='form-box'>
                  <div className="form-group">
                    <Field name="datePicker" id="datePicker">
                      {
                        ({ form, field }) => {
                          const { setFieldValue } = form
                          const { value } = field
                          return (
                            <DatePickerComponent
                              id="datePicker"
                              name="datePicker"
                              field={field}
                              selected={value}
                              onChange={val => setFieldValue("datePicker", val)}
                            />
                          )
                        }
                      }
                    </Field>
                    <ErrorMessage name="datePicker" component={ErrorComponent} />
                  </div>
                  {/* <div className="form-group">
                    <Field name="email">
                      {props => {
                        const { field, form, meta } = props
                        return (
                          <InputComponent
                            type="email"
                            id="email"
                            placeholder="Your Email Id"
                            field={field}
                          />
                        )
                      }}
                    </Field>
                    <ErrorMessage name="email" component={ErrorComponent} />
                  </div> */}
                  <div className="form-group">
                    <Field name="selectOption" id="selectOption">
                      {props => {
                        const { field, form, meta } = props
                        return (
                          <SelectComponent
                            id="selectOption"
                            name="selectOption"
                            required={true}
                            field={field}
                            options={selectOptions}
                            placeholder='Your destination'
                          />
                        )
                      }}
                    </Field>
                    <ErrorMessage name="selectOption" component={ErrorComponent} />
                  </div>
                  <div className="form-group">
                    <Field name="selectOption" id="selectOption">
                      {props => {
                        const { field, form, meta } = props
                        return (
                          <SelectComponent
                            id="selectOption"
                            name="selectOption"
                            required={true}
                            field={field}
                            options={selectOptions}

                          />
                        )
                      }}
                    </Field>
                    <ErrorMessage name="selectOption" component={ErrorComponent} />
                  </div>
                  <div className="form-group">
                    <Field name="selectOption" id="selectOption">
                      {props => {
                        const { field, form, meta } = props
                        return (
                          <SelectComponent
                            id="selectOption"
                            name="selectOption"
                            required={true}
                            field={field}
                            options={selectOptions}
                          />
                        )
                      }}
                    </Field>
                    <ErrorMessage name="selectOption" component={ErrorComponent} />
                  </div>

                  <div className="form-group">
                    <ButtonComponent name="Continue" />
                  </div>
                </Form>
              </Formik>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expandSpotAccordion} onClick={()=>{setExpandTripAccordion(false);setExpandSpotAccordion(!expandSpotAccordion);setExpandConfirmationAccordion(false)}}> 
          <AccordionSummary
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>2 Find your spot</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                <Form className='form-box'>
                  <div className="form-group">
                    <Field name="email">
                      {props => {
                        const { field, form, meta } = props
                        return (
                          <InputComponent
                            type="email"
                            id="email"
                            placeholder="Your Email Id"
                            field={field}
                          />
                        )
                      }}
                    </Field>
                    <ErrorMessage name="email" component={ErrorComponent} />
                  </div>
                  <div className="form-group">
                    <Field name="selectOption" id="selectOption">
                      {props => {
                        const { field, form, meta } = props
                        return (
                          <SelectComponent
                            id="selectOption"
                            name="selectOption"
                            required={true}
                            field={field}
                            options={selectOptions}
                          />
                        )
                      }}
                    </Field>
                    <ErrorMessage name="selectOption" component={ErrorComponent} />
                  </div>
                  <div className="form-group">
                    <Field name="selectOption" id="selectOption">
                      {props => {
                        const { field, form, meta } = props
                        return (
                          <SelectComponent
                            id="selectOption"
                            name="selectOption"
                            required={true}
                            field={field}
                            options={selectOptions}
                          />
                        )
                      }}
                    </Field>
                    <ErrorMessage name="selectOption" component={ErrorComponent} />
                  </div>
                  <div className="form-group">
                    <Field name="selectOption" id="selectOption">
                      {props => {
                        const { field, form, meta } = props
                        return (
                          <SelectComponent
                            id="selectOption"
                            name="selectOption"
                            required={true}
                            field={field}
                            options={selectOptions}
                          />
                        )
                      }}
                    </Field>
                    <ErrorMessage name="selectOption" component={ErrorComponent} />
                  </div>
                  <div className="form-group">
                    <Field name="datePicker" id="datePicker">
                      {
                        ({ form, field }) => {
                          const { setFieldValue } = form
                          const { value } = field
                          return (
                            <DatePickerComponent
                              id="datePicker"
                              name="datePicker"
                              field={field}
                              selected={value}
                              onChange={val => setFieldValue("datePicker", val)}
                            />
                          )
                        }
                      }
                    </Field>
                    <ErrorMessage name="datePicker" component={ErrorComponent} />
                  </div>
                  <div className="form-group">
                    <ButtonComponent name="Confirm" />
                  </div>
                </Form>
              </Formik>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expandConfirmationAccordion} onClick={()=>{setExpandTripAccordion(false);setExpandSpotAccordion(false);setExpandConfirmationAccordion(!expandConfirmationAccordion)}}>
          <AccordionSummary
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>3 Confirmation</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                <Form className='form-box'>
                  <div className="form-group">
                    <Field name="email">
                      {props => {
                        const { field, form, meta } = props
                        return (
                          <InputComponent
                            type="email"
                            id="email"
                            placeholder="Your Email Id"
                            field={field}
                          />
                        )
                      }}
                    </Field>
                    <ErrorMessage name="email" component={ErrorComponent} />
                  </div>
                  <div className="form-group">
                    <Field name="selectOption" id="selectOption">
                      {props => {
                        const { field, form, meta } = props
                        return (
                          <SelectComponent
                            id="selectOption"
                            name="selectOption"
                            required={true}
                            field={field}
                            options={selectOptions}
                          />
                        )
                      }}
                    </Field>
                    <ErrorMessage name="selectOption" component={ErrorComponent} />
                  </div>
                  <div className="form-group">
                    <Field name="selectOption" id="selectOption">
                      {props => {
                        const { field, form, meta } = props
                        return (
                          <SelectComponent
                            id="selectOption"
                            name="selectOption"
                            required={true}
                            field={field}
                            options={selectOptions}
                          />
                        )
                      }}
                    </Field>
                    <ErrorMessage name="selectOption" component={ErrorComponent} />
                  </div>
                  <div className="form-group">
                    <Field name="selectOption" id="selectOption">
                      {props => {
                        const { field, form, meta } = props
                        return (
                          <SelectComponent
                            id="selectOption"
                            name="selectOption"
                            required={true}
                            field={field}
                            options={selectOptions}
                          />
                        )
                      }}
                    </Field>
                    <ErrorMessage name="selectOption" component={ErrorComponent} />
                  </div>
                  <div className="form-group">
                    <Field name="datePicker" id="datePicker">
                      {
                        ({ form, field }) => {
                          const { setFieldValue } = form
                          const { value } = field
                          return (
                            <DatePickerComponent
                              id="datePicker"
                              name="datePicker"
                              field={field}
                              selected={value}
                              onChange={val => setFieldValue("datePicker", val)}
                            />
                          )
                        }
                      }
                    </Field>
                    <ErrorMessage name="datePicker" component={ErrorComponent} />
                  </div>
                  <div className="form-group">
                    <ButtonComponent name="Continue" />
                  </div>
                </Form>
              </Formik>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </HomePageComponent>
    </>
  );
};

export default App;
