import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { addTodoAC } from "../../redux/profileReducer";
import { logoutUserAC } from "../../redux/loginReducer";

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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);