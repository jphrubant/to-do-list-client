import React from 'react'
import { AuthContext } from "./../contexts/authContext"


function Login() {
  return (
    <AuthContext.Consumer>{(context) => {
      const { username, password, handleChange, login, loginError } = context;
      return (
        <div className="section-div">
          <h1 className="title">LOGIN</h1>
          <hr></hr>
          <form onSubmit={login}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <button className="submit-button" type="submit">Login</button>
          </form>

          {loginError ? (
            <div className="form-validation">
              <span>The credentials you entered are incorrect.</span>
              <br></br>
              <br></br>
              Try again!
            </div>
          ) : ( null )}

        </div>
      )
    }}
    </AuthContext.Consumer>
  )
}

export default Login;