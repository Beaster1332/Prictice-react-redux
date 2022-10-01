import React from "react";
import classes from './Profile.module.css';
import TodoForm from "./TodoForm/TodoForm";
import TodoItem from "./TodoItem/TodoItem";

const Profile = (props) => {

    const logoutUser = () => {
        props.logoutUser();
        props.deleteAllTodo();
    }

    const addTodo = (todoText) => {
        props.addTodo(todoText);
    }

    let todoItems = props.todos.map(todo =>
        <TodoItem
            key={todo.id}
            todo={todo}
        />
    )

    return <div className={classes.profileBlock}>
        <div className={classes.infoBlock}>
            <div className={classes.infoItem}>
                <span className={classes.logoutItem} onClick={logoutUser}>{`${props.name}`}</span>
            </div>
            <div className={classes.infoItem}>
                <span>&#9754; Выход можно осуществить, нажав на Ваше имя!</span>
            </div>
        </div>
        <div className={classes.todoBlock}>
            <div className={classes.todoCreateBlock}>
                <TodoForm onSubmit={addTodo} />
            </div>
            <div className={classes.todoItemsBlock}>
                {props.todos.length === 0 ? <div className={classes.noTodoBlock}>No todos yet...</div> : todoItems}
            </div>
        </div>
    </div>
}

export default Profile;