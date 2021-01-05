import * as actionTypes from "../actions/actionTypes";
// import { REHYDRATE } from 'redux-persist/lib/constants';
const initialState = {
  isAuthenticated: false,
  isUserOnline: true, // change this to false before pushing
  userDetails: null,
  subjectData: null,
  chaptersData: [],
  rawChapters: [],
  topicsData: [],
  visitedTopicData: [],
  currentSelectedSem: 1,
  referenceBookList: [],
  videoUrl: "",
  playTime: 0,
  quizTakingData: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LOGOUT: {
      return initialState;
    }
    case actionTypes.UPDATE_USER_STATUS_DATA: {
      return {
        ...state,
        isUserOnline: action.payload,
      };
    }
    case actionTypes.SET_STORE_DATA: {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        userDetails: action.payload.userDetails,
        subjectData: action.payload.subjectData,
      };
    }
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
