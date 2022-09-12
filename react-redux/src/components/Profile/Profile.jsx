import React from "react";
import classes from './Profile.module.css';
import TodoForm from "./TodoForm/TodoForm";
import TodoItem from "./TodoItem/TodoItem";

const Profile = (props) => {

    const logoutUser = () => {
        props.logoutUser();
    }
    
    const addTodo = (todoText) => {
        props.addTodo(todoText);
    }

    let todoItems = props.todos.map(t => <TodoItem todo={t.todo} />)

    return <div className={classes.profileBlock}>
        <div className={classes.infoBlock}>
            <div className={classes.infoItem}>
                <span className={classes.logoutItem} onClick={logoutUser}>{`${props.name}`}</span>
            </div>
        </div>
        <div className={classes.todoBlock}>
            <div className={classes.todoCreateBlock}>
                <TodoForm onSubmit={addTodo} />
            </div>
            <div className={classes.todoItemsBlock}>
                {todoItems}
            </div>
        </div>
    </div>
}

export default Profile;