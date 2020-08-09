import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as authSaga from '../sagas/authSaga';
export function* rootSaga() {
    yield takeEvery(actionTypes.LOGIN_SUCCEED, authSaga.loginSucceed);
    yield takeEvery(actionTypes.LOGGED_IN_USER_FETCHED, authSaga.loggedInUserFetched);
    yield takeEvery(actionTypes.UPDATE_USER, authSaga.updateUserInStore);
}
