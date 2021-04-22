import Data from '../jsonplaceholder';

export const fetchPost = async () => {

    const response = await Data.get('/posts');

    return {
        type: 'FETCH_POST',
        payload: response
    }
}
