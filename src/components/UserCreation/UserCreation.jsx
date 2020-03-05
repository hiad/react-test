import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { Label, Button, FormGroup } from 'reactstrap';
import {
      Form,
      H5,
} from './StyledComponents';
import {
      Link,
} from "react-router-dom";


const UserCreation = ({
      location,
}) => {

      const {
            state = {}
      } = location;
      const {
            id = 0,
            name = '',
            age = '',
            personTypeId = 1,
      } = state;
      const [errorMessage, setErrorMessage] = useState('');

      return (
            <>
                  <H5>{
                        (location.state) ?
                              "Edit Person" :
                              "Create Person"
                  }</H5>
                  <Formik
                        initialValues={{ id, name, age, personTypeId }}
                        validate={values => {
                              const errors = {};
                              if (!values.id) {
                                    errors.id = 'Required';
                              }
                              if (!values.name) {
                                    errors.name = 'Required';
                              }
                              if (!values.age) {
                                    errors.age = 'Required';
                              }

                              return errors;
                        }}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                              try {
                                    let method = 'POST';
                                    if (location.state) {
                                          method = 'PUT';
                                    }
                                    const { status } = await fetch('https://my-json-server.typicode.com/sgcis/codetest/persons', {
                                          method,
                                          body: JSON.stringify(values),
                                          headers: {
                                                "Content-type": "application/json; charset=UTF-8"
                                          }
                                    });
                                    if (status === 201) {
                                          setSubmitting(true);
                                          resetForm({});
                                    } else {
                                          throw status;
                                    }
                              } catch (status) {
                                    setErrorMessage(status);
                                    setSubmitting(false);
                              }
                        }}
                  >
                        {({
                              handleSubmit,
                              isSubmitting,
                        }) => (
                                    <Form onSubmit={handleSubmit}>
                                          <FormGroup>
                                                <Field type="text" placeholder="Id" name="id" />
                                                <ErrorMessage name="id" component="div" />
                                          </FormGroup>
                                          <FormGroup>
                                                <Field type="text" placeholder="Name" name="name" />
                                                <ErrorMessage name="name" component="div" />
                                          </FormGroup>
                                          <FormGroup>
                                                <Field type="text" placeholder="Age" name="age" />
                                                <ErrorMessage name="age" component="div" />
                                          </FormGroup>
                                          <FormGroup>
                                                <Field name="personTypeId" as="select">
                                                      <option value='1'>Student</option>
                                                      <option value='2'>Teacher</option>
                                                </Field>
                                          </FormGroup>
                                          <Link to={"/"}>
                                                <Button>Back to list</Button>
                                          </Link>
                                          {' '}
                                          <Button type="submit" disabled={isSubmitting}>Save</Button>
                                          {errorMessage && <Label> Error {errorMessage}</Label>}
                                    </Form>
                              )}
                  </Formik>
            </>
      );
};

UserCreation.defaultProps = {
      location: {
            state: {},
      },
};

export default UserCreation;
