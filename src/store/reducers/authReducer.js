import * as actionTypes from '../actions/actionTypes';
const initialState = {
    isAuthenticated: false,
    userDetails: null,
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER: {
            return {
                ...state,
                isAuthenticated: true,
                userDetails: action.payload,
            };
        }
        case actionTypes.UPDATE_USER_IN_STORE: {
            return { ...state, userDetails: action.payload };
        }
        default:
            return state;
    }
};
export default reducer;
