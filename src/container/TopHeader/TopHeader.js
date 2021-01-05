import React, { Component } from 'react';
import cookies from 'react-cookies';
import './TopHeader.scss';
import { withRouter } from 'react-router-dom';
import * as RoutePath from '../../shared/utils/routeLink';
import * as ActionTypes from '../../store/actions/actionTypes';
import { connect } from 'react-redux';

class TopHeader extends Component {
    state = {
        userProfileDetails: '',
        isUserPresent: false
    };

    componentDidMount() {

        this.getUserInfo();

    }
    logout = () => {
        // remove all data from storage
    }

    componentDidUpdate(prevProps) {
       
    }

    redirectHandler = name => {
        if (this.props.history.location.pathName !== name) {
            switch (name) {
                case RoutePath.SIGNIN: {
                    this.props.history.push(RoutePath.SIGNIN);
                    break;
                }
                case RoutePath.SIGNUP: {
                    this.props.history.push(RoutePath.SIGNUP);
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

    getUserInfo = () => {
        if (cookies.load('dianauthtoken')) {

            console.log('Hiii');

            this.setState({
                isUserPresent: true
            })

        }
    }

    becomeMentor = () => {
        this.redirectHandler(RoutePath.SIGNUP)
    };
    goToSignin = () => {
        this.redirectHandler(RoutePath.SIGNIN)
    };
    

    goToDashboard = () => {
        this.redirectHandler(RoutePath.DASHBOARD)
    };

    render() {
        return (
            <div></div>
        );
    }
}
TopHeader.defaultProps = {
    subHeader: true,
};
const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch_updateUser: payload =>
            dispatch({ type: ActionTypes.UPDATE_USER, payload: payload }),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(TopHeader));
