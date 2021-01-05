import React from "react";
//import TopHeader from "../../container/TopHeader/TopHeader";
import "./DashboardComponent.scss"; 
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as RoutePath from "../../shared/utils/routeLink";
import * as ActionTypes from "../../store/actions/actionTypes"; 

class DashboardComponent extends React.Component {
  state = {};

  componentDidMount() {}

  redirectHandler = (name) => {
    if (this.props.history.location.pathName !== name) {
      switch (name) {
        case RoutePath.DASHBOARD: {
          this.props.history.push(RoutePath.DASHBOARD);
          break;
        }
        default: {
        }
      }
    }
  };

  render() {
    return (
      <div className="widget">
        sample page
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};
const mapStateToDispatch = (dispatch) => {
  return {
    dispatch_loginSucceed: (payload) =>
      dispatch({ type: ActionTypes.LOGIN_SUCCEED, payload: payload }),
  };
};
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(withRouter(DashboardComponent));
