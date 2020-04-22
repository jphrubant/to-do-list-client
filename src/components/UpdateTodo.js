import React from 'react'
import { Link } from "react-router-dom";
import { TodoContext } from "../contexts/todoContext"

function UpdateTodo(props) {
  return (
    <TodoContext.Consumer>{(context) => {
      const id = props.match.params.id;
      const { name, description, deleteTodo, updateTodo, handleChange } = context;
      return(
      <div className="section-div">
        <h1 className="title">Update task</h1>
        <hr></hr>
          <form>
            <div className="form-group">
              <label>Title:</label>
              <input
              type="text"
                name="name"
                value={name}
                onChange={handleChange}
                />
            </div>  
            <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={description}
              onChange={handleChange}
            />
            </div>
            <div className="account-toggles">
              <Link to={'/add'}>
                <button className="delete-button" onClick={() => {deleteTodo(id)}}>Delete</button>
              </Link>
              <Link to={'/add'}>
                <button className="task-button" onClick={() => {updateTodo(id)}} type="submit">Save</button>
              </Link>
            </div>
          </form>
        </div>
     )
    }}
      </TodoContext.Consumer>
  )
}

export default UpdateTodo
