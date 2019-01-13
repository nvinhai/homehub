import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';





class Welcome extends Component {

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: { main: '#81adc0' }, 
      }
    });

  
    return (
      <div id="WelcomePage">


    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
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
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          Email <br />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <br /> Password <br />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <br />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
    

    );
  }
}

export default Welcome;
