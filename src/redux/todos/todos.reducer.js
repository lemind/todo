import { types } from './todos.types'

export const initialState = {
  list: [],
  loading: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TODOS:
      return {
        ...state,
        list: [],
        loading: true
      };
    case types.FETCH_TODOS_SUCCEEDED:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case types.FETCH_TODOS_FAILED:
      return {
        ...state,
        list: [],
        loading: false,
        error: action.error
      };
    case types.TODO_CREATE:
      return {
        ...state,
        loading: true
      };
    case types.TODO_CREATE_SUCCEEDED:
      let newList = Array.from(state.list)

      const newTodoFromServer = action.payload;
      const createdTodo = {
        id: newTodoFromServer.id,
        title: newTodoFromServer.todo.title,
        completed: newTodoFromServer.todo.completed
      }

      return {
        ...state,
        list: [...newList, createdTodo],
        loading: false
      };
    case types.TODO_CREATE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case types.TODO_UPDATE:
      return {
        ...state,
        loading: true
      };
    case types.TODO_UPDATE_SUCCEEDED:
      newList = state.list.map( (item, index) => {
        if(item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          ...action.payload.todo //todo: why?
        };
      });

      return {
        ...state,
        list: newList,
        loading: false
      };
    case types.TODO_UPDATE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case types.TODO_DELETE:
      return {
        ...state,
        loading: true
      };
    case types.TODO_DELETE_SUCCEEDED:
      const indexDeleted = state.list.findIndex( (item) => {
        return item.id === action.payload
      });

      newList = [
        ...state.list.slice(0, indexDeleted),
        ...state.list.slice(indexDeleted + 1)
      ];

      return {
        ...state,
        list: newList,
        loading: false
      };
    case types.TODO_DELETE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}
