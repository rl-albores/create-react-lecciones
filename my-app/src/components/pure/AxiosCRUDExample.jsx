import React from 'react'
import {
  createUser,
  deleteUserByID,
  getAllPagesUsers,
  getAllUsers,
  getUsersByID,
  login,
  updateUser,
} from '../../services/axiosCRUDService'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const AxiosCRUDExample = () => {
  const initialCredentials = {
    email: '',
    password: '',
  }

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  })

  const authUser = (values) => {
    login(values.email, values.password)
      .then((response) => {
        if (response.data.token) {
          alert(JSON.stringify(response.data))
          sessionStorage.setItem('token', response.data.token)
        } else {
          sessionStorage.removeItem('token')
          throw new Error('Login failure')
        }
      })
      .catch(
        (error) => alert(`Something went wrong: ${error}`),
        sessionStorage.removeItem('token')
      )
      .finally(() => console.log('Login done'))
  }

  //CRUD examples
  const obtainAllUsers = () => {
    getAllUsers()
      .then((response) => {
        if (response.data.data && response.status === 200) {
          alert(JSON.stringify(response.data.data))
        } else {
          throw new Error('User not found')
        }
      })
      .catch((error) => alert(`Something went wrong: ${error}`))
  }

  const obtainAllPagesUsers = (page) => {
    getAllPagesUsers(page)
      .then((response) => {
        if (response.data.data && response.status === 200) {
          alert(JSON.stringify(response.data.data))
        } else {
          throw new Error(`No user not found in page ${page}`)
        }
      })
      .catch((error) => alert(`Something went wrong: ${error}`))
  }

  const obtainUserByID = (id) => {
    getUsersByID(id)
      .then((response) => {
        if (response.data.data && response.status === 200) {
          alert(JSON.stringify(response.data.data))
        } else {
          throw new Error('User not found')
        }
      })
      .catch((error) => alert(`Something went wrong: ${error}`))
  }

  const createNewUser = (name, job) => {
    createUser(name, job)
      .then((response) => {
        if (response.data && response.status === 201) {
          alert(JSON.stringify(response.data))
        } else {
          throw new Error('User not created')
        }
      })
      .catch((error) => alert(`Something went wrong: ${error}`))
  }

  const updateUserByID = (id, name, job) => {
    updateUser(id, name, job)
      .then((response) => {
        if (response.data && response.status === 200) {
          alert(JSON.stringify(response.data))
        } else {
          throw new Error('User not update')
        }
      })
      .catch((error) => alert(`Something went wrong: ${error}`))
  }

  const deleteUser = (id) => {
    deleteUserByID(id)
      .then((response) => {
        if (response.status === 204) {
          alert(`User with id: ${id} successfully deleted`)
        } else {
          throw new Error('User deleted')
        }
      })
      .catch((error) => alert(`Something went wrong: ${error}`))
  }

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema} //-> Yup validation schema
        onSubmit={async (values) => {
          authUser(values)
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
      {/* Example button to test API responses */}
      <div>
        <button onClick={obtainAllUsers}>Get all users with axios</button>
        <button onClick={() => obtainAllPagesUsers(1)}>
          Get all users with (Page 1) axios
        </button>
        <button onClick={() => obtainUserByID(1)}>Get user ID</button>
        <button onClick={() => createNewUser('morpheus', 'leader')}>
          Create user
        </button>
        <button onClick={() => deleteUser(1)}>Delete user</button>
        <button onClick={() => updateUserByID(1, 'morpheus', 'Developer')}>
          Update user
        </button>
      </div>
    </div>
  )
}

export default AxiosCRUDExample
