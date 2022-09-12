import React from "react";
import { useForm } from "react-hook-form";

const TodoForm = (props) => {

    const { register,
        handleSubmit,
        reset,
        formState: { isDirty } } = useForm();

    const addTodo = ({todo}) => {
        props.onSubmit(todo);
        reset();
    }

    return <form onSubmit={handleSubmit(addTodo)}>
        <input {...register('todo')} placeholder="Your todo" />
        <button disabled={!isDirty}>Create todo</button>
    </form>
}

export default TodoForm;