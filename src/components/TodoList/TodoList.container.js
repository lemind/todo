import { connect } from 'react-redux'
import { todosActions } from '../../redux/todos/index';
import TodoListComponent from './TodoList.component'

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: todo => {
      dispatch(todosActions.todoUpdate(todo))
    },
    onTodoDeleteClick: todoId => {
      dispatch(todosActions.todoDelete(todoId))
    },
    fetchTodos: () => {
      dispatch(todosActions.fetchTodos())
    }
  }
}

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListComponent)
