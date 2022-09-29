import React from "react";
import { Navigate } from 'react-router-dom';
import classes from './Form.module.css';
import { useForm } from 'react-hook-form';
import { TextField } from "./TextField";

const Form = (props) => {
    const {
        register,
        formState: {
            errors,
            isValid,
        },
        reset,
        handleSubmit
    } = useForm({
        mode: 'onBlur'
    });

    let onSubmit = ({ login, name, password }) => {
        props.loginUser(login, name, password);
        reset();
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    } else {
        return (
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        name={"Login"}
                        placeholder={"Login"}
                        fieldName={"login"}
                        required={'Required field!'}
                        minLength={3}
                        register={register}
                    />
                    <div className={classes.loginFormErrors}>
                        {errors?.login && <p>{errors?.login?.message || 'Error!'}</p>}
                    </div>
                    <TextField
                        name={"Name"}
                        placeholder={"Name"}
                        fieldName={"name"}
                        required={'Required field!'}
                        register={register}
                    />
                    <div className={classes.loginFormErrors}>
                        {errors?.name && <p>{errors?.name?.message}</p>}
                    </div>
                    <TextField
                        name={"Password"}
                        placeholder={"Password"}
                        fieldName={"password"}
                        required={'Required field!'}
                        type={"password"}
                        minLength={8}
                        register={register}
                    />
                    <div className={classes.loginFormErrors}>
                        {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
                    </div>
                    <button className={classes.submit} disabled={!isValid}>Submit</button>
                </form>
            </div>
        )
    }
}

// В объкте errors есть ошибки и если они относятся к типу required,
// то выводится сообщение из соответствующего свойства
// и также с остальнымы свойствами валидации, которые передаются 2 параметром в register

export default Form;