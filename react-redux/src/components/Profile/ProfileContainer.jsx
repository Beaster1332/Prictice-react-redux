import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Profile from "./Profile";
import { addTodoAC, deleteAllTodoAC } from "../../redux/profileReducer";
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
        deleteAllTodo: () => dispatch(deleteAllTodoAC()),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Profile);