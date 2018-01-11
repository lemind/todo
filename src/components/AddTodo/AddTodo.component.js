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
          className="add"
          onSubmit={this.onSubmit}
        >
          <div className="add__empty"></div>
          <div className="add__actions">
            <button className="add__button" type="submit">
              +
            </button>
            <input
              className="add__input"
              ref={node => {
                this.state.input = node
              }}
            />
          </div>
        </form>
      </div>
    )
  };
}

export default AddTodoComponent
