import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
})

const LoginFormik = () => {
  const initialCredentials = {
    email: '',
    password: '',
  }

  const history = useNavigate()

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema} //-> Yup validation schema
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500))
          alert(JSON.stringify(values, null, 2))
          await localStorage.setItem('credentials', values) //-> quedan los datos en el localstorage
          history('/profile')
        }}>
        {/* We obtain props form Formik */}

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
            {errors.password && touched.password && (
              <div>
                <ErrorMessage name="password" component="div" />
              </div>
            )}
            <button type="submit">Login</button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginFormik
