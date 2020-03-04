import React from 'react';
import styled from 'styled-components';
import { Formik, Field, ErrorMessage } from 'formik';
import { Button, Form as BaseForm, FormGroup } from 'reactstrap';
import {
      Link,
} from "react-router-dom";

const Form = styled(BaseForm)`
      padding-top: 2em;
`;

const H5 = styled.h5`
      padding-top: 2em;
`;

const UserCreation = ({
      className,
      id,
      name,
      age,
}) => {

      return (
            <>
                  <H5>Create Person</H5>
                  <Formik
                        initialValues={{ id: '', name: '', age: '' }}
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
                        onSubmit={(values, { setSubmitting }) => {
                              setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                              }, 400);
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
                                    </Form>
                              )}
                  </Formik>
            </>
      );
};

export default UserCreation;
