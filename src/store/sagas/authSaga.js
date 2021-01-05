import { put } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
export function* logoutUser(action) {
  yield put({ type: actionTypes.UPDATE_LOGOUT, payload: action.payload });
}
export function* updateUserStatus(action) {
  yield put({
    type: actionTypes.UPDATE_USER_STATUS_DATA,
    payload: action.payload,
  });
}
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
export function* updateAllDataInStore(action) {
  yield put({ type: actionTypes.SET_STORE_DATA, payload: action.payload });
}
