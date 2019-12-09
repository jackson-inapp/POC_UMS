import { LOGIN, LOGOUT } from "../type";
import jwt from 'jwt-decode';

const initialState = {
  login: false,
  token: "",
  userType: ''
};
const loginHandler = (state, token) => {
  let newState = { ...state };
  newState.login = true;
  newState.token = token;
  newState.userType = jwt(token).type;
  return newState;
};
const logoutHandler = () => {
  let newState = {
    login: false,
    token: "",
    userType: ''
  };
  return newState;
};

function loginReducer(state = initialState, action ) {
  switch (action.type) {
    case LOGIN:
      return loginHandler(state, action.payload);
    case LOGOUT:
      return logoutHandler();
    default:
      return state;
  }
}

export default loginReducer;
