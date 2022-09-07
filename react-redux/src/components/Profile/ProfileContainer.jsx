import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { addTodoAC } from "../../redux/profileReducer";

const mapStateToProps = (state) => {
    return {
        name: state.loginReducer.name,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todoItem) => dispatch(addTodoAC(todoItem)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);