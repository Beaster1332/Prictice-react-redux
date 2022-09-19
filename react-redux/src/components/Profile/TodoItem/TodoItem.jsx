import React from "react";
import classes from './TodoItem.module.css';

const TodoItem = (props) => {
    return <div className={classes.todoItem}>
        <div>
            <span className={classes.todoText}>{props.todo.text}</span>
        </div>
        <div>
            <button className={classes.deleteTodo} onClick={props.deleteTodo}>Delete</button>
        </div>
    </div>
}

export default TodoItem;