import React from "react";
import { connect } from "react-redux";
import { loginUserAC } from "../../redux/loginReducer";
import Form from "./Form";

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginReducer.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (login, name, password) => dispatch(loginUserAC(login, name, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);