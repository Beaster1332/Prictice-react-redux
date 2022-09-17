import React from "react";
import { useForm } from "react-hook-form";
import classes from './TodoForm.module.css';

const TodoForm = (props) => {

    const { register,
        handleSubmit,
        reset,
        formState: { isDirty } } = useForm();

    const addTodo = ({todo}) => {
        props.onSubmit(todo);
        reset();
    }

    return <form className={classes.todoForm} onSubmit={handleSubmit(addTodo)}>
        <input {...register('todo')} placeholder="Your todo" className={classes.todoInput} />
        <button className={classes.todoButton} disabled={!isDirty}>Create todo</button>
    </form>
}

export default TodoForm;