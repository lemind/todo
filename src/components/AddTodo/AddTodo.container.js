import { connect } from 'react-redux'
import { todosActions } from '../../redux/todos/index';
import AddTodoComponent from './AddTodo.component'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => {
      dispatch(todosActions.todoCreate(todo))
    }
  }
}

export const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoComponent)
