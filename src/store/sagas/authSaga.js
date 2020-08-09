import { put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
export function* loginSucceed(action) {
    yield put({ type: actionTypes.SET_USER, payload: action.payload });
}
export function* loggedInUserFetched(action) {
    yield put({ type: actionTypes.SET_USER, payload: action.payload });
}
export function* updateUserInStore(action) {
    yield put({
        type: actionTypes.UPDATE_USER_IN_STORE,
        payload: action.payload,
    });
}
