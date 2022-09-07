const LOGIN_USER = 'login/LOGIN_USER';
const LOGOUT_USER = 'login/LOGOUT_USER';

let initialState = {
    login: '',
    name: '',
    password: '',
    isAuth: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case LOGOUT_USER:
            return {
                ...state,
                login: '',
                name: '',
                password: '',
                isAuth: false,
            }
        default:
            return state;
    }
}

export const loginUserAC = (login, name, password) => ({ type: LOGIN_USER, data: { login, name, password } });
export const logoutUserAC = () => ({ type: LOGOUT_USER });

export default loginReducer;