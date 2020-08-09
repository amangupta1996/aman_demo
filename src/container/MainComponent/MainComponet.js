import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { withRouter } from 'react-router-dom';
import * as RoutePath from '../../shared/utils/routeLink';
import * as actionPath from '../../store/actions/actionTypes';
import TopHeader from '../TopHeader/TopHeader';
import { connect } from 'react-redux';
import LoadingComponent from '../../component/LoadingComponent/LoadingComponent';
import LoginComponentOne from '../../component/LoginComponentOne/LoginComponentOne';

import './MainComponent.css';
// import SignupComponent from '../../component/SignupComponent/SignupComponent';

const LoginComponent = Loadable({
    loader: () => import('../../component/LoginComponent/LoginComponent'),
    loading() {
        return LoadingComponent;
    },
});

class MainComponent extends Component {
    state = {
        activeComponent: LoginComponent,
    };

    async componentDidMount() {
        this.unlisten = this.props.history.listen(async location => {
            switch (location.pathname) {
                case RoutePath.DASHBOARD: {
                    this.setState({ activeComponent: LoginComponent });
                    break;
                }
                case RoutePath.SECONDPAGE: {
                    this.setState({
                        activeComponent: LoginComponentOne
                    })
                    break;
                }
                // case RoutePath.SIGNUP: {
                //     this.setState({ activeComponent: SignupComponent });
                //     break;
                // }
                default: {
                }
            }
        });
        this.props.history.push(this.props.history.location.pathname);
    }
    componentWillUnmount() {
        this.unlisten();
    }
    render() {
        return (
            <div className="fullWidthClass">
                
                <TopHeader />
                
                <this.state.activeComponent />
                
            </div>
            
        );
    }
}
const mapStateToProps = state => {
    return state;
};
const mapStateToDispatch = dispatch => {
    return {
        userDetailsFetched: payload =>
            dispatch({ type: actionPath.LOGGED_IN_USER_FETCHED, payload: payload }),
    };
};
export default connect(
    mapStateToProps,
    mapStateToDispatch,
)(withRouter(MainComponent));
