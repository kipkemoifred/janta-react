import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT } from '../actions/authActions';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state };
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload, isAuthenticated: true };
    case LOGOUT:
      return { ...state, token: null, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;
