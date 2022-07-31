import * as types from './ActionType';
import axios from 'axios';


const getPosts = (posts) => ({
    type: types.GET_POST,
    payload: posts,

});

const postDeleted = () => ({
    type: types.DELETE_POST
   

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







