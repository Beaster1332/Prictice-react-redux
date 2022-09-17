import React from "react";
import classes from './TodoItem.module.css';

const TodoItem = (props) => {
    return <div className={classes.todoItem}>
            <div>{props.todo.text}</div>
            <div>
                <button onClick={props.deleteTodo}>Delete</button>
            </div>
    </div>
}

export default TodoItem;