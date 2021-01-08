import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "../../Contexts/UserContext";
const PrivateRoute = ({ children, path }) => {
  const {
    userData: { token },
  } = useUserContext();
  return (
    <Route
      path={path}
      render={() => (token ? children : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
