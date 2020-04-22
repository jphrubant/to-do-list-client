import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./../contexts/authContext"

function AnonRoute({ component: Component, ...rest }) {
  return (
    <AuthContext.Consumer>{(context) => {
      const { isLoggedIn } = context;
      return (
        <Route
          {...rest}
          render={function(props) {
            if (isLoggedIn) return <Redirect to="/add" />;
            else if (!isLoggedIn) return <Component {...props} />;
          }}
        />
      )
    }}
    </AuthContext.Consumer>
  )
}

export default AnonRoute;