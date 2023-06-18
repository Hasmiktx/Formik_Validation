import React from 'react';
import './Style.css';
import { Formik, Field, Form } from 'formik';

const Basic = () => (
    <div className="form_div">
        <h1>Create New Accunt</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                teamName: '',
                email: '',
                password: '',
            }}
            validate={(values) => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                    )
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
                <Form onSubmit={handleSubmit} className="form_div">
                    <label>First Name</label>
                    <Field
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                    />
                    {errors.email && touched.email && errors.email}
                    <label>Last Name</label>
                    <Field
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.laststName}
                    />
                    {errors.email && touched.email && errors.email}
                    <label>Email Address</label>
                    <Field
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <label>Password</label>
                    <Field
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default Basic;
