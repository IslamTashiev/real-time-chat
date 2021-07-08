import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { privateRoutes, publickRoutes } from "./Routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./Utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import { Context } from "..";

export default function AppRouter() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return user ? (
    <Switch>
      {privateRoutes.map(({ path, component }) => (
        <Route key={path} path={path} component={component} exact />
      ))}
      <Redirect to={CHAT_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publickRoutes.map(({ path, component }) => (
        <Route key={path} path={path} component={component} exact />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
}
