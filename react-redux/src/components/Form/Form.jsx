import React from "react";
import { useFormik } from "formik";

const Form = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h1>Gembobo</h1>
        </form>
    )
}

export default Form;