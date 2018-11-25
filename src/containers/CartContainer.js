import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Cart from "../components/Cart";
import { getPlp } from "../action/index";
const mapDispatchToProps = disptach => {
  return {
    getPlp: () => {
      disptach(getPlp());
    }
  };
};
const mapStateToProps = state => {
  return { plp: state.plpReducer };
};

const CartContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
);
export default CartContainer;
