import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';

import { actions } from './todos.actions';
import { types } from './todos.types';
import { API } from '../../api/index';

export const todosEpics = {};

todosEpics.fetchTodosEpic = action$ =>
  action$.ofType(types.FETCH_TODOS)
    .mergeMap(action => {
      return API.fetchTodos()
        .map(response => {
          return actions.fetchTodosSucceeded(response)
        })
        .catch(error => of(
          actions.fetchTodosFailed({
            status: '' + response.status,
          })
        ));
    });

todosEpics.todosCreateEpic = action$ =>
  action$.ofType(types.TODO_CREATE)
    .mergeMap(action => {
      return API.createTodo(action.todo)
        .map(response => {
          console.log('333', response)
          return actions.todoCreateSucceeded(response)
        })
        .catch(error => of(
          actions.todoCreateFailed({
            status: '' + error.status,
          })
        ));
    });

todosEpics.todosUpdateEpic = action$ =>
  action$.ofType(types.TODO_UPDATE)
    .mergeMap(action => {
      return API.updateTodo(action.todo)
        .map(response => {
          return actions.todoUpdateSucceeded(response)
        })
        .catch(error => of(
          actions.todoUpdateFailed({
            status: '' + error.status,
          })
        ));
    });

todosEpics.todosDeleteEpic = action$ =>
  action$.ofType(types.TODO_DELETE)
    .mergeMap(action => {
      return API.deleteTodo(action.todoId)
        .map(response => {
          return actions.todoDeleteSucceeded(action.todoId)
        })
        .catch(error => of(
          actions.todoDeleteFailed({
            status: '' + error.status,
          })
        ));
    });
