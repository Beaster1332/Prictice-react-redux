const ADD_TODO = 'profile/ADD_TODO';

let initialState = {
    todos: [],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let todoText = action.todoText;

            return {
                ...state,
                todos: [...state.todos, {todo: todoText}],
            }
        default:
            return state;
    }
}

export const addTodoAC = (todoText) => ({ type: ADD_TODO, todoText });

export default profileReducer;