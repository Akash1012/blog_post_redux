import Data from '../jsonplaceholder';

export const fetchPost = () => {
    console.log("FETCH POSTSYTSTSTSTSTS")
    return async (dispatch) => {
        const response = await Data.get('/posts');
        dispatch({ type: 'FETCH_POST', payload: response.data })
    }
}


export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await Data.get(`/users/${id}`)
        dispatch({ type: 'FETCH_USER', payload: response.data })
    }
}

