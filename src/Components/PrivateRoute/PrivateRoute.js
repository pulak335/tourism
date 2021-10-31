import React from "react";
import { Redirect } from "react-router";
import useAuth from './../../hooks/useAuth';
import { Route } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
    const {users} = useAuth();

    return (
      <Route
        {...rest}
        render={({ location }) =>
          users.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;