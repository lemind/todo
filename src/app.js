import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { combineReducers } from 'redux';

import styles from './app.less';

import { rootReducer, rootEpic } from './redux/root';

import { AddTodoContainer as AddTodo } from './components/AddTodo/AddTodo.container';
import { TodoListContainer as TodoList } from './components/TodoList/TodoList.container';

const epicMiddleware = createEpicMiddleware(rootEpic);

const middleware = process.env.NODE_ENV
  ? applyMiddleware(epicMiddleware)
  : composeWithDevTools(
    applyMiddleware(epicMiddleware)
  );

const store = createStore(
  rootReducer,
  middleware
);

const renderApp = () => (
  render(
    <Provider store={store}>
      <div className="container">
        <AddTodo />
        <TodoList />
      </div>
    </Provider>,
    document.getElementById('app')
  )
);

renderApp();
