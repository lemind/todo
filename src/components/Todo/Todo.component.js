import React from 'react'

export class Todo extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { onClick, onDeleteClick, completed, title } = this.props;

    return (
      <li
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        <span onClick={ onClick }>{title}</span>
        <button onClick={ onDeleteClick }>Delete</button>
      </li>
    )
  };
}

export default Todo
