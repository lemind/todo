import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { todosReducer, todosEpics } from './todos/index';

export const rootReducer = combineReducers({
  todos: todosReducer
});

export const rootEpic = combineEpics(
  todosEpics.fetchTodosEpic,
  todosEpics.todosUpdateEpic,
  todosEpics.todosDeleteEpic,
  todosEpics.todosCreateEpic
);
