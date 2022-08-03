
import axios from 'axios';
import* as types from './ActionType';

export const getPosts = (posts) => ({
    type:'GET_POST',
    payload:posts,
       
    }

);

const postDeleted = () => ({
    type:types.DELETE_POST
   

});
const getComments = (comments) => ({
    type: 'GET_COMMENT',
    payload: comments,

});
const commentDeleted = () => ({
    type: 'DELETE_COMMENT'
   

});

const getProduct = (products) => ({
    type: 'GET_PRODUCT',
    payload: products,

});
const productDeleted = () => ({
    type: 'DELETE_PROUDUCT'
   

});

export const loadPost= () => {

    return function (dispatch) {
        axios.get('http://127.0.0.1:8000/api/post?page=2').then((resp) => {
            dispatch(getPosts(resp.data));
           
        console.log('fetched');
            console.log(resp)
           
        }).catch((error) =>
         console.log(error));
         
    }

}
export const loadAllPost= () => {

    return function (dispatch) {
        axios.get('http://127.0.0.1:8000/api/Allposts').then((resp) => {
            dispatch(getPosts(resp.data));
           
        console.log('fetched');
            console.log(resp)
           
        }).catch((error) =>
         console.log(error));
         
    }

}

export const deletePost= (id) => {

    return function (dispatch) {
        axios.delete(`http://127.0.0.1:8000/api/post/${id}`).then((resp) => {
            // console.log('fetched');
            dispatch(postDeleted());
            // dispatch(loadUsers());
            

        }).catch((error) => console.log(error));
    }

}
export const loadComment= () => {

    return function (dispatch) {
        axios.get('http://127.0.0.1:8000/api/comment').then((resp) => {
            console.log('fetched');
            dispatch(getComments(resp.data));
        }).catch((error) => console.log(error));
    }

}
export const deleteComment= (id) => {

    return function (dispatch) {
        axios.delete(`http://127.0.0.1:8000/api/comment/${id}`).then((resp) => {
            // console.log('fetched');
            dispatch(commentDeleted());
            // dispatch(loadUsers());
            

        }).catch((error) => console.log(error));
    }

}
export const loadProduct= () => {

    return function (dispatch) {
        axios.get('http://127.0.0.1:8000/api/ads').then((resp) => {
            console.log('fetched');
            dispatch(getProduct(resp.data));
        }).catch((error) => console.log(error));
    }

}
export const deleteProduct= (id) => {

    return function (dispatch) {
        axios.delete(`http://127.0.0.1:8000/api/ads/${id}`).then((resp) => {
            // console.log('fetched');
            dispatch(productDeleted());
            // dispatch(loadUsers());
            

        }).catch((error) => console.log(error));
    }

}





