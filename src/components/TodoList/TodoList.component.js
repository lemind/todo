import React from 'react'
import Todo from '../Todo/Todo.component'

export class TodoListComponent extends React.Component {
  constructor(props) {
    super();

    this.state = {
      todos: []
    };

    this.actions = {};
    this.actions.fetchTodos = props.fetchTodos;
    this.todoClickEvent = this.todoClickEvent.bind(this);
    this.todoDeleteClickEvent = this.todoDeleteClickEvent.bind(this);
  }

  componentWillMount() {
    this.actions.fetchTodos();
  }

  componentWillReceiveProps(state) {
    if (state.todos.list.length) {
      this.setState({
        todos: state.todos.list
      });
    }
  }

  todoClickEvent(todo) {
    const { onTodoClick } = this.props;
    todo.completed = !todo.completed;
    onTodoClick(todo);
  }

  todoDeleteClickEvent(todoId) {
    const { onTodoDeleteClick } = this.props;
    onTodoDeleteClick(todoId);
  }

  render() {
    return (
      <div>
        <div>
          {this.state.todos.length && this.state.todos.map(todo => (
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => this.todoClickEvent(todo)}
              onDeleteClick={() => this.todoDeleteClickEvent(todo.id)}
            />
          ))}
        </div>
      </div>
    )
  };
}

export default TodoListComponent
