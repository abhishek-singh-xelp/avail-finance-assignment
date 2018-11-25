import React from "react";
import { Switch, Route } from "react-router-dom";
import PlpContainer from "../containers/PlpContainer";
import CartContainer from "../containers/CartContainer";

export default class Home extends React.Component {
  render() {
    return (
      <div className="MainContainer">
        <Switch>
          <Route exact path="/" component={PlpContainer} />
          <Route path="/cart" component={CartContainer} />
        </Switch>
      </div>
    );
  }
}
