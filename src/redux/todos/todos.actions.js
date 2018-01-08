import { types } from './todos.types'

export const actions = {
  fetchTodos: () => ({
    type: types.FETCH_TODOS
  }),
  fetchTodosSucceeded: (payload) => ({
    type: types.FETCH_TODOS_SUCCEEDED,
    payload
  }),
  fetchTodosFailed: (error) => ({
    type: types.FETCH_TODOS_FAILED,
    error
  }),
  todoCreate: (todo) => ({
    type: types.TODO_CREATE,
    todo
  }),
  todoCreateSucceeded: (payload) => ({
    type: types.TODO_CREATE_SUCCEEDED,
    payload
  }),
  todoCreateFailed: (error) => ({
    type: types.TODO_CREATE_FAILED,
    error
  }),
  todoUpdate: (todo) => ({
    type: types.TODO_UPDATE,
    todo
  }),
  todoUpdateSucceeded: (payload) => ({
    type: types.TODO_UPDATE_SUCCEEDED,
    payload
  }),
  todoUpdateFailed: (error) => ({
    type: types.TODO_UPDATE_FAILED,
    error
  }),
  todoDelete: (todoId) => ({
    type: types.TODO_DELETE,
    todoId
  }),
  todoDeleteSucceeded: (payload) => ({
    type: types.TODO_DELETE_SUCCEEDED,
    payload
  }),
  todoDeleteFailed: (error) => ({
    type: types.TODO_DELETE_FAILED,
    error
  })
}
