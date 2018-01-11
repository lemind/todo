import React from 'react'

export class Todo extends React.Component {
  constructor(props) {
    super();
  }

  handler() {

  }

  render() {
    const { onClick, onDeleteClick, completed, title } = this.props;

    return (
      <div className="todo__item">
        <div className="todo__checkbox-block">
          <input
            checked={ completed }
            type="checkbox"
            onClick={ onClick }
            onChange={ this.handler }
          />
        </div>
        <div
          className="todo__info-block"
        >
          <span 
            style={{
              textDecoration: completed ? 'line-through' : 'none'
            }}
            className="todo__title"
            onClick={ onClick }
          >{title}</span>
          <span
            className="todo__delete"
            onClick={ onDeleteClick }
          ></span>
        </div>
      </div>
    )
  };
}

export default Todo
