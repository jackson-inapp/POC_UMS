import {
  LOGIN,
  LOGOUT,
  LOADER
} from "./type";

export const login = token => ({
  type: LOGIN,
  payload: token
});

export const logout = () => ({
  type: LOGOUT
});

export const loader = condition => ({
  type: LOADER,
  payload: condition
});