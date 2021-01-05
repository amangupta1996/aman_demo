import React from "react";
import cookies from "react-cookies";
import "./LoginComponent.scss";
import makeRequest from "../../shared/utils/request";
import {
  generateRequestOptions,
  homeUrl,
} from "../../shared/utils/apiEndPoints";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { isEmpty } from "../../shared/utils/check";
import * as RoutePath from "../../shared/utils/routeLink";
import * as ActionTypes from "../../store/actions/actionTypes";
import SliderComponent from "../../shared/component/SliderComponent/SliderComponent";

class LoginComponent extends React.Component {
  state = {
    userId: "",
    password: "",
    disableButton: false,
    isShowPassword: false,
  };
  credentialHandler = (event) => {
    this.setState({
      [`${event.target.name}`]: event.target.value,
    });
    // setErrorText("")
  };

  componentDidMount() {
    // if (
    //     !isEmpty(cookies.load('dianauthtoken', { domain: homeUrl }))
    // ) {
    //     this.props.history.push(this.props.history.location.pathname);
    // } else {
    //     this.props.history.push(RoutePath.SIGNIN);
    // }
  }

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.set_login();
    }
  };

  logIn = async () => {
    let data = {
      login: this.state.userId,
      password: this.state.password,
    };

    console.log(data);
    if (!data.login || !data.password) {
      this.setState({
        disableButton: false,
        errorMessage: "Fill All Details Correctly",
      });
    } else {
      this.setState({ disableButton: true, responseMessage: false });
      let res = await makeRequest({
        ...generateRequestOptions("logIn"),
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: data,
        json: true,
      });
      console.log(res);
      if (res.code === 200) {
        if (res.data.role === "student") {
          this.props.dispatch_loginSucceed(res.data);
          this.redirectHandler(RoutePath.DASHBOARD);
        } else {
          this.setState({
            errorMessage: "You are not a student",
            disableButton: false,
            responseMessage: true,
          });
        }
      } else {
        this.setState({
          errorMessage: res.message,
          disableButton: false,
          responseMessage: true,
        });
      }

      this.setState({ disableButton: false });
    }
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
        default: {
        }
      }
    }
  };

  goToDashboard = () => {
    this.redirectHandler(RoutePath.DASHBOARD);
  };

  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  enterPressed = (event) => {
    const code = event.keyCode || event.which;
    if (code === 13) {
      //13 is the enter keycode
      this.logIn();
    }
  }; // end enterPressed

  render() {
    const {
      errorMessage,
      responseMessage,
      userId,
      isShowPassword,
      password,
    } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 leftSideBox">
            <div className="row noMar width100P">
              <SliderComponent />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 rightSideBox">
            <div className=" row noMar formContainer">
              <div className="col-12 noPad formHeading">Sign In</div>
              <div className="col-12 noPad form-group">
                <label>User name</label>
                <input
                  type="userId"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="userId"
                  value={userId}
                  onChange={this.inputHandler}
                  onKeyPress={this.enterPressed}
                />
              </div>
              {errorMessage && !userId && (
                <div className="col-12 noPad error-box">
                  Fill Correct User Id
                </div>
              )}
              <div className="col-12 noPad form-group">
                <label>Password</label>
                <div className="input-group">
                  <input
                    type={!isShowPassword ? "password" : "text"}
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={this.inputHandler}
                    onKeyPress={this.enterPressed}
                  />
                  <div
                    className="input-group-append cursorPointer"
                    onClick={() => {
                      this.setState({ isShowPassword: !isShowPassword });
                    }}
                  >
                    <span className="input-group-text">
                      <i className="fa fa-eye"></i>
                    </span>
                  </div>
                </div>
              </div>
              {errorMessage && !password && (
                <div className="col-12 noPad error-box">Fill Password</div>
              )}
              <div className="col-12 noPad forgorPassword">
                <span
                  className="cursorPointer linkText"
                  onClick={this.forgotPassword}
                >
                  Forgot Password?
                </span>
              </div>
              <div className="col-12 noPad">
                <button
                  type="submit"
                  onClick={() => this.logIn()}
                  disabled={this.state.disableButton}
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
              {errorMessage && responseMessage && (
                <div className="col-12 noPad error-box margin-t-0">
                  {errorMessage}
                </div>
              )}
              <div className="col-12 noPad centerTextToOtherPage">
                <label>
                  Don't have an account?{" "}
                  <span
                    className="cursorPointer linkText"
                    onClick={this.goToSignup}
                  >
                    Sign Up
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
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
)(withRouter(LoginComponent));
