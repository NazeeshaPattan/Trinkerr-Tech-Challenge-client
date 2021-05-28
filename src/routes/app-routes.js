import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/Login/index"
export default () => {
  let { user } = useSelector((state) => state.userDetails);
  console.log("USER IS ", user);
  return (
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
      
    </Switch>
  );
};
