import * as types from './ActionType';
import axios from 'axios';


const getPosts = (posts) => ({
    type: types.GET_POST,
    payload: posts,

});

const postDeleted = () => ({
    type: types.DELETE_POST
   

});
const getComments = (comments) => ({
    type: types.GET_COMMENT,
    payload: comments,

});
const commentDeleted = () => ({
    type: types.DELETE_COMMENT
   

});

const getProduct = (comments) => ({
    type: types.GET_COMMENT,
    payload: comments,

});
const productDeleted = () => ({
    type: types.DELETE_COMMENT
   

});

export const loadPost= () => {

    return function (dispatch) {
        axios.get('http://127.0.0.1:8000/api/Allposts').then((resp) => {
            console.log('fetched');
            dispatch(getPosts(resp.data));
        }).catch((error) => console.log(error));
    }

}

export const deletePost= (id) => {

    return function (dispatch) {
        axios.delete(`http://127.0.0.1:8000/api/deletePost/${id}`).then((resp) => {
            // console.log('fetched');
            dispatch(postDeleted());
            // dispatch(loadUsers());
            

        }).catch((error) => console.log(error));
    }

}
export const loadComment= () => {

    return function (dispatch) {
        axios.get('http://localhost:8000/api/getAllComments').then((resp) => {
            console.log('fetched');
            dispatch(getComments(resp.data));
        }).catch((error) => console.log(error));
    }

}
export const deleteComment= (id) => {

    return function (dispatch) {
        axios.delete(`http://127.0.0.1:8000/api/deleteComment/${id}`).then((resp) => {
            // console.log('fetched');
            dispatch(commentDeleted());
            // dispatch(loadUsers());
            

        }).catch((error) => console.log(error));
    }

}
export const loadProduct= () => {

    return function (dispatch) {
        axios.get('http://localhost:8000/api/ads').then((resp) => {
            console.log('fetched');
            dispatch(getProduct(resp.data));
        }).catch((error) => console.log(error));
    }

}
export const deleteProduct= (id) => {

    return function (dispatch) {
        axios.delete(`http://127.0.0.1:8000/api/deleteProduct/${id}`).then((resp) => {
            // console.log('fetched');
            dispatch(productDeleted());
            // dispatch(loadUsers());
            

        }).catch((error) => console.log(error));
    }

}





