import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../action/index'


const PostList = (props) => {
    const { sendPostRequest, newData } = props;

    useEffect(() => {
        sendPostRequest();
    }, [])

    console.log("aa", sendPostRequest)

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

const mapStateToProps = (state) => {
    console.log(state)
    return {
        newData: state
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(PostList)