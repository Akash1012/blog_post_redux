import Data from '../jsonplaceholder';

export const fetchPost = () => {
    return async (dispatch) => {
        const response = await Data.get('/posts');
        dispatch({ type: 'FETCH_POST', payload: response })
    }

}


