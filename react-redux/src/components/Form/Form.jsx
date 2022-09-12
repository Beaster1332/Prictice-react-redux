import React from "react";
import { Navigate } from 'react-router-dom';
import classes from './Form.module.css';
import { useForm } from 'react-hook-form';

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
                    <label className={classes.label}>
                        <span className={classes.inputLabel}>Login:</span>
                        <div className={classes.inputBlock}>
                            <input
                                className={classes.input}
                                placeholder={'Login'}
                                {...register('login', {
                                    required: 'Required field!',
                                    minLength: {
                                        value: 3,
                                        message: 'Minimal length is 3 symbols!'
                                    }
                                })}
                            />
                        </div>
                    </label>
                    <div>
                        {errors?.login && <p>{errors?.login?.message || 'Error!'}</p>}
                    </div>
                    <label className={classes.label}>
                        <span className={classes.inputLabel}>Name:</span>
                        <div className={classes.inputBlock}>
                            <input
                                className={classes.input}
                                placeholder={'Name'}
                                {...register('name', {
                                    required: 'Required field!',
                                })}
                            />
                        </div>
                    </label>
                    <div>
                        {errors?.name && <p>{errors?.name?.message}</p>}
                    </div>
                    <label className={classes.label}>
                        <span className={classes.inputLabel}>Password:</span>
                        <div className={classes.inputBlock}>
                            <input
                                className={classes.input}
                                placeholder={'Password'}
                                type={'password'}
                                {...register('password', {
                                    required: 'Required field!',
                                    minLength: {
                                        value: 8,
                                        message: 'Minimal length is 8 symbols!'
                                    }
                                })}
                            />
                        </div>
                    </label>
                    <div>
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