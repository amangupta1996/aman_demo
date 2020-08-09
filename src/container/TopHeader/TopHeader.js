import React, { Component } from 'react';
import cookies from 'react-cookies';
import {
    Grid,
    Container,
} from 'semantic-ui-react';
import './TopHeader.css';
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

    }

    redirectHandler = name => {
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
            <React.Fragment>
                <div className="fullBg noMar">
                <Container>
                    {/* header start */}
                    <Grid columns={1} divided>
                        <Grid.Row className="margin-t-b-3">
                            <Grid.Column>
                                <h1>LOGO</h1>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    {/* header ends */}
                </Container>
                </div>
            </React.Fragment>
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
