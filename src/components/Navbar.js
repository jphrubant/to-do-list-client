import React from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from "./../contexts/authContext";

function Navbar() {
  return (
    <AuthContext.Consumer>{(context) => {
      const { isLoggedIn, logout} = context;
      return (
        <div>
          <nav className="navbar">
            <div className="logo-div">
              <Link to={'/'}>
                TO DO
              </Link>
            </div>
            {isLoggedIn ? (
              <div className="auth-div">
                <div>
                  <Link to={'/add'}>
                   <button className="nav-button">Task manager</button>
                  </Link>
                </div>
                <div>
                  <button onClick={logout} className="nav-button">Logout</button>
                </div>
              </div>
            ) : (
              <div className="auth-div">
                <div>
                  <Link to={'/login'}>
                    <button className="nav-button">login</button>
                  </Link>
                </div>
                <div>
                  <Link to={'/signup'}>
                    <button className="nav-button">Signup</button>
                  </Link>
                </div>
              </div>
            )}
          </nav>
        </div>
      )
    }}</AuthContext.Consumer>
  )
}

export default Navbar;
