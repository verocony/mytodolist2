//  리스트업 하기
// Action Value
// Action Creator
// Initial State
// Reducer
// export default reducer


// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";

// Action Creator
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload : payload,
    };
};

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    };
};

export const toggleStatusTodo = (payload) => {
    return {
        type: TOGGLE_STATUS_TODO,
        payload,
    };
};

export const getTodoById = (payload) => {
    return {
        type: GET_TODO_BY_ID,
        payload,
    };
};

// Initial State  *****

const initialState = {
    todos : [
        {
            id: 0,
            title: " ",
            body: " ",
            isDone: false,
          },            
    ],  // 사실 배열이라고만 정의해두고 비워져있어도 상관없음
    todo : {
        id : 0,
        title: " ",
        body : " ",
        isDone: false
    },
};


// Reducer
const todos = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
            case TOGGLE_STATUS_TODO:
                return {
                  ...state,
                  todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                      return {
                        ...todo,
                        isDone: !todo.isDone,
                      };
                    } else {
                      return todo;
                    }
                  }),
                };
          
              case GET_TODO_BY_ID:
                return {
                  ...state,
                  todo: state.todos.find((todo) => {
                    return Number(todo.id) === Number(action.payload);
                  }),
                };
              default:
                return state;
            }
          };
          
          export default todos;