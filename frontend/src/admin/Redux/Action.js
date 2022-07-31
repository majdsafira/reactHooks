import * as types from './ActionType';
import axios from 'axios';


const getPosts = (posts) => ({
    type: types.GET_POSTS,
    payload: posts,

});

const postDeleted = () => ({
    type: types.DELETE_POST
   

});


const userAdded = () => ({
    type: types.ADD_USER,
   

});


const getPost= (post) => ({
    type: types.GET_SINGLE_POST,
    payload:post,
   

});

const userUpdated = () => ({
    type: types.UPDATE_USER,
   

});

export const loadPost = () => {

    return function (dispatch) {
        axios.get(' http://127.0.0.1:8000/api/Allposts').then((resp) => {
            console.log('fetched');
            dispatch(getUsers(resp.data));
        }).catch((error) => console.log(error));
    }

}

export const deletePost = (id) => {

    return function (dispatch) {
        axios.delete(`http://localhost:8000/api//deletepost/${id}`).then((resp) => {
            // console.log('fetched');
            dispatch(userDeleted());
            // dispatch(loadUsers());
            

        }).catch((error) => console.log(error));
    }

}

export const addUser = (post) => {

    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`,user).then((resp) => {
            // console.log('fetched');
            dispatch(userAdded());


           

        }).catch((error) => console.log(error));
    }

}

export const getSingleUser = (id) => {

    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            // console.log('fetched');
            dispatch(getUser(resp.data));
            // dispatch(loadUsers());

        }).catch((error) => console.log(error));
    }

}



export const updateUser = (user, id) => {

    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/${id}`,user).then((resp) => {
            // console.log('fetched');
            dispatch(userUpdated());
            // dispatch(loadUsers());

        }).catch((error) => console.log(error));
    }

}