import React from "react";
import { withRouter } from "react-router-dom";
class Header extends React.Component {
  goTo = url => {
    this.props.history.push(url);
  };
  render() {
    return (
      <div className="Header">
        <div className="heading">E-Commerce</div>
        <div className="headerItem" onClick={() => this.goTo("/")}>
          Plp
        </div>
        <div className="headerItem" onClick={() => this.goTo("/cart")}>
          Cart
        </div>
      </div>
    );
  }
}
export default withRouter(Header);
