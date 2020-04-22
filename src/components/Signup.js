import React from 'react'
import { AuthContext } from "./../contexts/authContext"

function Signup() {
  return (
    <AuthContext.Consumer>{(context) => {
      const { username, password, password2, handleChange, signup, signupError } = context;
      return (
        <div className="section-div">
          <h1 className="title">SIGNUP</h1>
          <hr></hr>
          <form onSubmit={signup}>
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
            <div className="form-group">
              <label>Confirm password:</label>
              <input
                type="password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </div>
            <button className="submit-button" type="submit">Signup</button>
          </form>
          {signupError ? (
            <div className="form-validation">
              <span>The passwords you entered do not match.</span> 
                <br></br>
                <br></br>
              Try again!
            </div>
          ) : ( null)}
        </div>
     )
    }}
    </AuthContext.Consumer>
  )
}

export default Signup;