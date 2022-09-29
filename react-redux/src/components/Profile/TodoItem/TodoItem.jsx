import React from "react";
import { connect } from "react-redux";
import { deleteAllTodoAC, toggleTodoAC } from "../../../redux/profileReducer";
import classes from './TodoItem.module.css';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {

    let completedTodoStyles = todo.completed ? classes.completedTodoText + ' ' + classes.todoText : classes.todoText;

    return <div className={classes.todoItem}>
        <div>
            <span className={completedTodoStyles}>{todo.text}</span>
        </div>
        <div>
            {todo.completed ?
                <button className={classes.uncompleteButton} onClick={() => toggleTodo(todo.id)}>Uncomplete</button> :
                <button className={classes.completeButton} onClick={() => toggleTodo(todo.id)}>Complete</button>
            }
        </div>
        <div>
            <button className={classes.deleteTodo} onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (todoId) => dispatch(toggleTodoAC(todoId)),
        deleteTodo: (todoId) => dispatch(deleteAllTodoAC(todoId))
    }
}

export default connect(null, mapDispatchToProps)(TodoItem);