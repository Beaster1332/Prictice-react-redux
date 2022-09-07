const ADD_TODO = 'profile/ADD_TODO';

let initialState = {
    todos: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export const addTodoAC = (todoItem) => ({ type: ADD_TODO, todos: { todoItem } });

export default profileReducer;