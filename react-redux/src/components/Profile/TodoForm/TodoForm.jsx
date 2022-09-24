import React from "react";
import { useForm } from "react-hook-form";
import classes from './TodoForm.module.css';

const TodoForm = (props) => {

    const { register,
        handleSubmit,
        reset,
        formState: { errors, isValid } } = useForm({ mode: 'onBlur' });

    const addTodo = ({ todo }) => {
        props.onSubmit(todo);
        reset();
    }

    return <form className={classes.todoForm} onSubmit={handleSubmit(addTodo)}>
        <input
            placeholder="Your todo" className={classes.todoInput}
            {...register('todo', {
                required: 'End your todo then add this in your list!',
                minLength: {
                    value: 3,
                    message: 'Minimal length is 3 symbols!'
                }
            })}
        />
        <div>
            {errors?.todo && <p>{errors?.todo?.message}</p>}
        </div>
        <button className={classes.todoButton} disabled={!isValid}>Create todo</button>
    </form>
}

export default TodoForm;