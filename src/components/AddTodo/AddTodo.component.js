import React from 'react'

export class AddTodoComponent extends React.Component {
  constructor(props) {
    super();

    this.state = {
      input: null
    };

    this.addTodo = props.addTodo;

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    if (!this.state.input.value.trim()) {
      return
    }
    const newTodo = {
      title: this.state.input.value,
      completed: false
    };
    this.addTodo(newTodo);

    this.state.input.value = ''
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
        >
          <input
            ref={node => {
              this.state.input = node
            }}
          />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  };
}

export default AddTodoComponent
