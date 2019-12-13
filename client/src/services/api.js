import axios from 'axios';
import auth from './auth'
import jwt from 'jwt-decode'

const baseurl = 'http://localhost:5000';

function setheader(){
    let header;
    if(auth.getToken()){
        header = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+auth.getToken() };
    }else{
        header = { 'Content-Type': 'application/json' };
    }
    return header;
}

const login = async (data) => {
    return axios({
        method: 'post',
        url: `${baseurl}/api/login`,
        data: data,
        headers: setheader()
    })
};

const registerOrg = async (data) => {
    return axios({
        method: 'post',
        url: `${baseurl}/api/org`,
        data: data,
        headers: setheader()
    })
};

const updateOrg = async (data,id) => {
    return axios({
        method: 'patch',
        url: `${baseurl}/api/org/${id}`,
        data: data,
        headers: setheader()
    })
};

const deleteOrg = async (id) => {
    return axios({
        method: 'delete',
        url: `${baseurl}/api/org/${id}`,
        headers: setheader()
    })
};

const registerUser = async (data) => {
    return axios({
        method: 'post',
        url: `${baseurl}/api/user`,
        data: data,
        headers: setheader()
    })
};

const deleteUser = async (id) => {
    return axios({
        method: 'delete',
        url: `${baseurl}/api/user/${id}`,
        headers: setheader()
    })
};

const viewUsers = async (type) => {
    return axios({
        method: 'get',
        url: `${baseurl}/api/user/${type}`,
        headers: setheader()
    })
};

const viewUser = async (id) => {
    return axios({
        method: 'get',
        url: `${baseurl}/api/user/${id}/`,
        headers: setheader()
    })
};

const vieworgs = async () => {
    return axios({
        method: 'get',
        url: `${baseurl}/api/org`,
        headers: setheader()
    })
};

const vieworg = async (id) => {
    return axios({
        method: 'get',
        url: `${baseurl}/api/org/${id}`,
        headers: setheader()
    })
};

const ViewOrgPagination = (page, perPage) => {
    return axios({
        method: 'get',
        url: `${baseurl}/api/org/pagination?page=${page}&per_page=${perPage}`,
        headers: setheader()
    })
}

const viewanalystPaginaion = async (type,page,perPage) => {
    return axios({
        method: 'get',
        url: `${baseurl}/api/user/pagination/${type}?page=${page}&per_page=${perPage}`,
        headers: setheader()
    })
};

const changepwd = (oldpwd, newpwd) => {
    let username = jwt(auth.getToken()).username;
    return axios({
        method: 'patch',
        url: `${baseurl}/api/user/changepwd`,
        data: {oldpwd,newpwd,username},
        headers: setheader()
    })
}

export default { login, registerOrg, updateOrg, deleteOrg, registerUser, deleteUser, viewUsers, viewUser, vieworgs, vieworg,ViewOrgPagination, viewanalystPaginaion, changepwd}

