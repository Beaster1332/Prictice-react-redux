import { v4 as uuidv4 } from 'uuid';

const ADD_TODO = 'profile/ADD_TODO';
const TOGGLE_TODO = 'profile/TOGGLE_TODO';
const DELETE_TODO = 'profile/DELETE_TODO';
const DELETE_ALL_TODO = 'profile/DELETE_ALL_TODO';

let initialState = {
    todos: [],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { id: uuidv4(), text: action.todoText, completed: false }],
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.todoId ?
                    { ...todo, completed: !todo.completed } :
                    todo
                )
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter(el => el.id !== action.todoId)]
            }
        case DELETE_ALL_TODO:
            return {
                ...state,
                todos: []
            }
        default:
            return state;
    }
}

export const addTodoAC = (todoText) => ({ type: ADD_TODO, todoText });
export const toggleTodoAC = (todoId) => ({ type: TOGGLE_TODO, todoId });
export const deleteTodoAC = (todoId) => ({ type: DELETE_TODO, todoId });
export const deleteAllTodoAC = () => ({ type: DELETE_ALL_TODO });

export default profileReducer;