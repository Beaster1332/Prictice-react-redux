import {v4 as uuidv4} from 'uuid';

const ADD_TODO = 'profile/ADD_TODO';
const DELETE_TODO = 'profile/DELETE_TODO';

let initialState = {
    todos: [],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {id: uuidv4(), text: action.todoText}],
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter(el => el.id !== action.todoId)]
            }
        default:
            return state;
    }
}

export const addTodoAC = (todoText) => ({ type: ADD_TODO, todoText });
export const deleteTodoAC = (todoId) => ({ type: DELETE_TODO, todoId });

export default profileReducer;