import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Plp from "../components/plp";
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

const PlpContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Plp)
);
export default PlpContainer;
