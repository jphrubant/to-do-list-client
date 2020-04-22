import React from 'react';
import { TodoContext } from "../contexts/todoContext"
import PendingTodos from "./PendingTodos";
import SolvedTodos from "./SolvedTodos";

function MyTodos() {
  return (
    <TodoContext.Consumer>{(context) => {
      const {togglePendingFunc, toggleSolvedFunc, pendingToggle, solvedToggle} = context;
      return(
        <div>
          <div className="toggle-div">
            <button className="toggle-button" onClick={togglePendingFunc}> {pendingToggle ? (
              <div>
                Hide pending tasks
              </div>
            ) : ( 
              <div>
                Show pending tasks
              </div>
            )}</button>
            <button className="toggle-button" onClick={toggleSolvedFunc}>{solvedToggle ? (
              <div>
                Hide solved tasks
              </div>
            ) : ( 
              <div>
                Show solved tasks
              </div>
            )}</button>
          </div>
          {pendingToggle ? ( <PendingTodos /> ) : ( null)}
          {solvedToggle ? ( <SolvedTodos /> ) : ( null )}
        </div>
      )
    }}
    </TodoContext.Consumer>
  )
}

export default MyTodos;
