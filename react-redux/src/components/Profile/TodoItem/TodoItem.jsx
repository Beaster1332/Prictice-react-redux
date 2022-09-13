import React from "react";
import classes from './TodoItem.module.css';

const TodoItem = (props) => {
    return <div className={classes.todoItem}>
            <span>{props.todo.todo}</span>
    </div>
}

export default TodoItem;