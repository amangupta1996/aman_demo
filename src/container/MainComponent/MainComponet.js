import React, { Component } from "react";
import Loadable from "react-loadable";
import { withRouter } from "react-router-dom";
import * as RoutePath from "../../shared/utils/routeLink";
import * as ActionTypes from "../../store/actions/actionTypes"; 
import { connect } from "react-redux";
import LoadingComponent from "../../component/LoadingComponent/LoadingComponent";
import DashboardComponent from "../../component/DashboardComponent/DashboardComponent";
import RightSideBar from "../../shared/component/RightSideBar/RightSideBar";
import "./MainComponent.scss"; 

const LoginComponent = Loadable({
  loader: () => import("../../component/LoginComponent/LoginComponent"),
  loading() {
    return LoadingComponent;
  },
});

class MainComponent extends Component {
  state = {
    activeComponent: LoginComponent,
    isLogin: true,
    isActiveComponent: "",
    videoUrl: "",
    isSidebarActive: false,
  };
  logout = () => {
    console.log("log out");
    this.props.logout(null);

    this.redirectHandler(RoutePath.SIGNIN);
  };
  goToDashboard = () => {
    this.redirectHandler(RoutePath.DASHBOARD);
  }; 

  redirectHandler = (name) => {
    if (this.props.history.location.pathName !== name) {
      switch (name) {
        case RoutePath.SIGNIN: {
          this.props.history.push(RoutePath.SIGNIN);
          break;
        }
        case RoutePath.DASHBOARD: {
          this.props.history.push(RoutePath.DASHBOARD);
          break;
        } 
        case RoutePath.SAMPLEPAGE: {
          this.props.history.push(RoutePath.SAMPLEPAGE);
          break;
        }
        case RoutePath.UICOMPONENT: {
          this.props.history.push(RoutePath.UICOMPONENT);
          break;
        }  
        default: {
        }
      }
    }
  };

  async componentDidMount() {
    this.unlisten = this.props.history.listen(async (location) => {
      this.setState({
        isLogin: false,
      });
      let name = location.pathname;
      switch (name) {
        case RoutePath.SIGNIN: {
          this.setState({ activeComponent: LoginComponent, isLogin: true });
          break;
        }
        case RoutePath.DASHBOARD: {
          this.setState({
            activeComponent: DashboardComponent,
            isActiveComponent: RoutePath.DASHBOARD,
          });
          break;
        }
         
        default: {
        }
      }
    });
    this.props.history.push(this.props.history.location.pathname);
    console.log(this.props.auth);
    if (this.props.auth)
      if (this.props.auth.persistedState)
        if (this.props.auth.persistedState.auth) {
          console.log("setting values");
          this.props.updateFromPersist(this.props.auth.persistedState.auth);
        }
    if (
      this.props.auth.userDetails &&
      this.props.auth.userDetails.role === "student"
    ) {
      this.setUserDetails();
      this.goToDashboard();
    } else {
      if (
        this.props.history.location.pathname.includes(
          RoutePath.FORGOTPASSWORD
        ) ||
        this.props.history.location.pathname.includes(
          RoutePath.RESETPASSWORD
        ) ||
        this.props.history.location.pathname.includes(RoutePath.SIGNUP)
      ) {
      } else {
        this.redirectHandler(RoutePath.SIGNIN);
      }
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.auth !== this.props.auth) {
      this.setUserDetails();
    }
  }
  setUserDetails = () => {
    this.setState({
      userDetails: this.props.auth.userDetails,
    });
  };

  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    const { isSidebarActive, isLogin, isActiveComponent } = this.state;
    return (
      <div>
        {/* <Offline>
                    <OfflineComponent polling={{interval: 500000}} language={this.state.language} />
                </Offline>
                <Online>
                    <OnlineComponent polling={{interval: 500000}} language={this.state.language} />
                </Online> */}
        {!isLogin && (
          <div className="container-fluid noPad">  
            <div
              className={
                isSidebarActive
                  ? "sidebarContainer sidebarWidth1"
                  : "sidebarContainer sidebarWidth2"
              }
            >
              <div className="sidebarWidth1"> 
                <ul className="block-menu">
                 
                  <li
                    onClick={() => this.goToDashboard()}
                    className={
                      isActiveComponent === RoutePath.DASHBOARD
                        ? "icon-home"
                        : "icon-home"
                    }
                  ></li>  
                </ul>
              </div>
            </div>
            <div
              className={
                isSidebarActive
                  ? "contentContainer contentWidth1"
                  : "contentContainer contentWidth2"
              }
            >
              <div className="container-fluid bg-white border-main" >
                <div className="row"> 

                  <div className="col-12 col-md-12 col-xl-12 noPad">
                    <this.state.activeComponent />
                    <RightSideBar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {isLogin && <this.state.activeComponent />}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
const mapStateToDispatch = (dispatch) => {
  return {
    userDetailsFetched: (payload) =>
      dispatch({ type: ActionTypes.LOGGED_IN_USER_FETCHED, payload: payload }),
    updateFromPersist: (payload) =>
      dispatch({ type: ActionTypes.UPDATE_FROM_PERSIST, payload: payload }),
    logout: (payload) =>
      dispatch({ type: ActionTypes.LOGOUT, payload: payload }),
  };
};
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(withRouter(MainComponent));
