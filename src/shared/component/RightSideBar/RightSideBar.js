import React from "react";
import cookies from "react-cookies";
import "./RightSideBar.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as RoutePath from "../../../shared/utils/routeLink";
import * as ActionTypes from "../../../store/actions/actionTypes";

class RightSideBar extends React.Component {
  state = {
    subjectDetails: null,
    sidebarTabs: {
      noteBtn: false,
      glosariumBtn: false,
      reportBtn: false,
      calendarBtn: false,
    },
    content: "content",
  };

  displayTabs = (identifier) => {
    let data = this.state.sidebarTabs;
    if (data[identifier] === true) {
      data[identifier] = false;
      this.setState({
        sidebarTabs: data,
      });
    } else {
      for (let tab in data) {
        data[tab] = false;
      }
      data[identifier] = true;
      // if(data.glosariumBtn){  // temporary
      this.setState({
        sidebarTabs: data,
      });
      // }  // temporary
    }
  };

  render() {
    const { sidebarTabs } = this.state;
    return (
      <div className="rightBox">
        <div className="">
          <div
            className="list"
            onClick={() => this.displayTabs("glosariumBtn")}
          >
            {sidebarTabs.glosariumBtn && (
              <div className="icon-glosarium active"></div>
            )}
            {!sidebarTabs.glosariumBtn && (
              <div className="icon-glosarium"></div>
            )}
          </div>
        </div>

        {sidebarTabs.noteBtn && (
          <div className="content-sidebar-nav note-content">
            <h1>note content</h1>
          </div>
        )}
        {sidebarTabs.glosariumBtn && (
          <div className="content-sidebar-nav note-content shodowBox">
            <h1>Dictionary content</h1>
          </div>
        )}
        {sidebarTabs.reportBtn && (
          <div className="content-sidebar-nav">
            <h1>Report Content</h1>
          </div>
        )}
        {sidebarTabs.calendarBtn && (
          <div className="content-sidebar-nav">
            <h1>Calendar Content</h1>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
const mapStateToDispatch = (dispatch) => {
  return {};
};
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(withRouter(RightSideBar));
