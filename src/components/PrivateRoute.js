import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./../contexts/authContext"

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <AuthContext.Consumer>{(context) => {
      const { isLoggedIn } = context;
      return (
        <Route
          {...rest}
          render={function(props) {
            if (isLoggedIn) return <Component {...props} />;
            else if (!isLoggedIn) return <Redirect to="/login" />;
          }}
        />
      )
    }}
    </AuthContext.Consumer>
  )
}

export default PrivateRoute;