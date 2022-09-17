import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Profile from "./Profile";
import { addTodoAC, deleteTodoAC } from "../../redux/profileReducer";
import { logoutUserAC } from "../../redux/loginReducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        name: state.loginReducer.name,
        todos: state.profileReducer.todos,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todoText) => dispatch(addTodoAC(todoText)),
        logoutUser: () => dispatch(logoutUserAC()),
        deleteTodo: (todoId) => dispatch(deleteTodoAC(todoId)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Profile);