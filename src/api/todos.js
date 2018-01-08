import { ajax } from 'rxjs/observable/dom/ajax';
import { API_HOST } from '../config';

export const todosAPI = {
  fetchTodos: () => {
    return ajax.getJSON(`${API_HOST}`);
  },
  updateTodo: (todo) => {
    return ajax({
      url: `${API_HOST}/${todo.id}`,
      method: 'PATCH',
      body: { todo },
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .map(e => e.response);
  },
  createTodo: (todo) => {
    return ajax({
      url: `${API_HOST}`,
      method: 'POST',
      body: { todo },
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .map(e => e.response);
  },
  deleteTodo: (todoId) => {
    return ajax({
      url: `${API_HOST}/${todoId}`,
      method: 'DELETE'
    })
    .map(e => e.response);
  }

};
