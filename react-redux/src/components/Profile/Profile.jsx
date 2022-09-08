import React from "react";
import classes from './Profile.module.css';

const Profile = (props) => {

    const logoutUser = () => {
        props.logoutUser();
    }

    const addTodo = (todoText) => {
        props.addTodo(todoText);
    }

    let todoItems = props.todos.map(t => <div>{t.todoText}</div>)

    return <div className={classes.profileBlock}>
        <div className={classes.infoBlock}>
            <div className={classes.infoItem}>
                <span className={classes.logoutItem} onClick={logoutUser}>{`${props.name}`}</span>
            </div>
        </div>
        <div className={classes.todoBlock}>
            <div className={classes.todoCreateBlock}>
                
            </div>
            <div className={classes.todoItemsBlock}>
                {todoItems}
            </div>
        </div>
    </div>
}

export default Profile;