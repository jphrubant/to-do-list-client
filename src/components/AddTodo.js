import React from 'react';
import { TodoContext } from "../contexts/todoContext"
import MyTodos from "./MyTodos";

function AddTodo() {
  return (
    <TodoContext.Consumer>{(context) => {
      const {name, description, handleChange, addTodo} = context;
      return(
        <div className="section-div">
          <h1 className="title">TASK MANAGER</h1>  
          <hr></hr>
          <form onSubmit={addTodo}>
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
            <button className="add-button" type="submit">Add Task</button>
          </form>
          <hr></hr>
          <MyTodos />
        </div>
        
      )
    }}
    </TodoContext.Consumer>
  )
}

export default AddTodo;
