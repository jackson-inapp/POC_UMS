import jwt from 'jwt-decode';
import { configureStore } from '../Redux/Store';

const getToken = () => {
    const state = configureStore.getState();
    return state.login.token;
}

const decodeToken = () => {
    if (getToken()) {
        jwt(getToken());
    } else {
        return '';
    }
}


export default { decodeToken, getToken }