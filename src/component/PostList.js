import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../action/index'


const PostList = (props) => {
    const { sendPostRequest } = props;

    useEffect(() => {
        sendPostRequest();
    }, [])

    return (
        <div>
            Post List
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendPostRequest: () => dispatch(fetchPost())
    }
}



export default connect(null, mapDispatchToProps)(PostList)