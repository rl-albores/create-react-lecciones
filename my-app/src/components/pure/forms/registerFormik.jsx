import React from 'react'
import { User } from '../../../models/user.class'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ROLES } from '../../../models/roles.enum'
import { Value } from 'sass'

const RegisterFormik = () => {
  let user = new User()

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '', // to confirm passowrd
    role: ROLES.USER,
  }

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, 'Username too short ')
      .max(12, 'Username too long')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
      .required('Role is required'),
    password: Yup.string()
      .min(8, 'Password too short')
      .required('Password is required')
      .matches(``),
    confirm: Yup.string()
      .when('password', {
        is: (value) => (value && value.lenght > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
      })
      .required('You must confirm the password'),
  })

  const submit = (values) => {
    alert('register user')
  }

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500))
          alert(JSON.stringify(values, null, 2))
        }}>
        {({
          values,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
        }) => (
          <Form>
            <label htmlFor="username">Username</label>
            <Field
              id="username"
              name="username"
              placeholder="Username"
              type="text"
            />
            {errors.username && touched.username && (
              <ErrorMessage name="username" component="div" />
            )}
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" placeholder="email@email.com" />
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div" />
            )}
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="Password"
              type="password"
            />
            {errors.confirm && touched.confirm && (
              <div>
                <ErrorMessage name="confirm" component="div" />
              </div>
            )}
            <label htmlFor="confirm">Confirm Password</label>
            <Field
              id="confirm"
              name="confirm"
              placeholder="Confirm password"
              type="password"
            />
            {errors.confirm && touched.confirm && (
              <div>
                <ErrorMessage name="confirm" component="div" />
              </div>
            )}
            <button type="submit">Register Account</button>
            {isSubmitting ? <p>Sending your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterFormik
