import jwt from 'jwt-decode';

const decodeToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
        jwt(token);
    } else {
        return '';
    }
}

const setToken = (token) => {
    localStorage.setItem('token',token);
}

const getToken = () => {
    return localStorage.getItem('token');
}

export default { decodeToken, getToken, setToken }