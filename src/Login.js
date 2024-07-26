
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: ''
  };

  const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required'
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className='container'>
      <div className='login-img'>
        <img src='welcome.avif' alt='img' />
      </div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='login'>
              <div className='login-label'>
                <span>Welcome Back</span>
                <h1>Sign in to</h1>
                <p>Lorem Ipsum is simply</p>
                <label htmlFor="username">Username:</label>
                <Field type="text" name="username" />
                <ErrorMessage name="username" component="span" style={{color:"red",}} /><br></br>
                <label htmlFor="password">Password:</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="span" style={{color:"red"}}/>
                <button type="submit" disabled={isSubmitting} id='btn'>
                  Login
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
