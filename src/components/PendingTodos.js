import React from 'react';
import { Link } from "react-router-dom";
import { TodoContext } from "../contexts/todoContext"

function PendingTodos() {
  return (
    <TodoContext.Consumer>{(context) => {
      const {todos, solveOneTodo, setTask} = context;
      return(
        <div>
          <p>Your pending tasks</p>
          {todos.map(oneTodo => {
            return(
              oneTodo.solved === false ? (
                <div className="task-card" key={oneTodo._id}>
                  <div className="task-content">
                    <div className="task-item-title">{oneTodo.name}</div>
                    <div className="task-item">{oneTodo.description}</div>
                    <div className="task-item-date"><span>Created on</span>: {oneTodo.createdTimestamp}</div>
                  </div>
                  <div>
                    <Link to={`/update/${oneTodo._id}`}>
                      <button className="task-button" onClick={() => {setTask(oneTodo._id)}}>Update task</button>
                    </Link>
                    <button className="task-button" onClick={() => {solveOneTodo(oneTodo)}}>Solve task</button>
                  </div>
                </div>
              ) : ( null ) 
            )
          })}
          </div>
      )
    }}
    </TodoContext.Consumer>
  )
}

export default PendingTodos;
